import {Languages, MovieGenres} from "../model/Movie.js";
import {Request, Response} from "express";
import {movieServiceMongo as service} from "../services/movieServiceImplMongo.js";

export const getCompareMoviesRating = async (req: Request, res: Response) => {
    const {field1, field2, operator} = req.query
    const result = await service.getCompareMoviesRating(field1 as string, field2 as string, operator as string);
    res.json(result);
}

export const getMoviesByLanguage = async (req: Request, res: Response) => {
    const language = req.query.language as Languages
    console.log(language)
    const result = await service.getMoviesByLanguage(language);
    res.json(result);
}

export const getMoviesByGenres = async (req: Request, res: Response) => {
    const genres = req.query.genre as MovieGenres[]
    console.log(genres)
    const result = await service.getMoviesWithBothGenres(genres);
    res.json(result);
}

export const getTopMoviesByAwardWins = async (req: Request, res: Response) => {
    const limit = req.query.limit
    if (limit) {
        const result = await service.getTopMoviesByAwardWins(+limit);
        res.json(result)
    }
    ;
}

export const getMoviesGroupedByRatingWithYear = async (req: Request, res: Response) => {
    const {year, field} = req.query
    if (year) {
        const result = await service.getMoviesGroupedByImdbRating(+year , field as string);
        res.json(result)
    }
}


