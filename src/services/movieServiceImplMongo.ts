import {MovieMongooseModel} from "../model/MovieModel.js";
import {MovieService} from "./movService.js";
import {Languages, Movie, MovieGenres} from "../model/Movie.js";
import {HttpError} from "../errorHandler/HttpError.js";

export class MovieServiceImplMongo implements MovieService {

    async getCompareMoviesRating(field1:string,
                                        field2: string,
                                        operator: string): Promise<Movie[]> {
        try {
            const result = await MovieMongooseModel.find({
                $expr: {[`$${operator}`]: [`$${field1}`, `$${field2}`]}
            }).exec() as Movie[];

            if (!result || result.length === 0) {
                throw new HttpError(404, "No movies found where IMDB rating is less than Tomatoes viewer rating");
            }
            return result;
        } catch (error: any) {
            if (error instanceof HttpError) throw error;
            throw new HttpError(500, `Failed to retrieve movies: ${error.message}`);
        }
    }


    async getMoviesByLanguage(language: Languages): Promise<Movie[]> {
        try {
            const languageMovies = await MovieMongooseModel.find({languages: {$eq: language}}) as Movie[];

            if (!languageMovies) throw new HttpError(404, `Movies with language ${language} not found`);
            return Promise.resolve(languageMovies)
        } catch (error: any) {
            if (error instanceof HttpError) throw error;
            throw new HttpError(500, `Failed to retrieve movies by language: ${error.message}`);
        }
    }

    async getMoviesWithBothGenres(requiredGenres: MovieGenres[]): Promise<Movie[]> {
        try {
            console.log(requiredGenres)
            const result = await MovieMongooseModel.find({genres: {$all: requiredGenres}}).exec() as Movie[];
            if (!result || result.length === 0)
                throw new HttpError(404, `Movies with genres ${requiredGenres.join(", ")} not found`);
            return result;
        } catch (error: any) {
            if (error instanceof HttpError) throw error;
            throw new HttpError(500, `Failed to retrieve movies by genres: ${error.message}`);
        }
    }

    async getTopMoviesByAwardWins(limit: number): Promise<{
        title: string,
        wins: number
    }[]> {
        try {
            const result = await MovieMongooseModel.find({
                'awards.wins': {$exists: true, $ne: null, $gt: 0}
            })
                .sort({'awards.wins': -1})
                .limit(limit)
                .select('title awards.wins')
                .exec();

            if (!result || result.length === 0) {
                throw new HttpError(404, "No movies found with award wins data");
            }
            return result.map(movie => ({
                title: movie.title,
                wins: movie.awards?.wins || 0
            }));
        } catch (error: any) {
            if (error instanceof HttpError) throw error;
            throw new HttpError(500, `Failed to retrieve top movies by awards: ${error.message}`);
        }
    }

    async getMoviesGroupedByImdbRating(year: number, ratingField: string): Promise<{
        [rating: string]: string[]
    }> {
        try {
            const result = await MovieMongooseModel.aggregate([
                {
                    $match: {
                        year: +year,
                        [ratingField]: { $ne: null, $exists: true, $type: "number" }
                    }
                },
                {
                    $group: {
                        _id: `$${ratingField}`,
                        titles: {$addToSet: '$title'}
                    }
                },
                {
                    $sort: {_id: -1}
                }
            ]);

            if (!result || result.length === 0) {
                throw new HttpError(404, `No movies found for year ${year} with ${ratingField}`);
            }


            const groupedMovies: { [rating: string]: string[] } = {};
            result.forEach(group => {
                groupedMovies[group._id.toString()] = group.titles;
            });

            return groupedMovies;
        } catch (error: any) {
            if (error instanceof HttpError) throw error;
            throw new HttpError(500, `Failed to group movies by rating: ${error.message}`);
        }
    }
}


export const movieServiceMongo = new MovieServiceImplMongo();