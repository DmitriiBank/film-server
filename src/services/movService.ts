import {Languages, Movie, MovieGenres} from "../model/Movie.js";


export interface MovieService {
    getCompareMoviesRating:(field1: string, field2: string, operator:string) => Promise<Movie[]>
    getMoviesByLanguage:(language:Languages) => Promise<Movie[]>;
    getMoviesWithBothGenres:(genres: MovieGenres[]) => Promise<Movie[]>;
    getTopMoviesByAwardWins:(limit: number) => Promise<{ title: string, wins: number }[]>;
    getMoviesGroupedByImdbRating:(year: number, ratingField: string) => Promise<{ [rating: string]: string[] }>
}