import {HttpError} from "../errorHandler/HttpError.js";
import {Languages, MovieGenres} from "../model/Movie.js";

export function getLanguage(language: string) {
    const movieLanguage = Object.values(Languages).find(v => v === language);
    if(!movieLanguage) throw  new HttpError(400, "Wrong language")
    else return movieLanguage;
}

export function getGenre(genre: string) {
    const movieGenre = Object.values(MovieGenres).find(v => v === genre);
    if(!movieGenre) throw  new HttpError(400, "Wrong genre")
    else return movieGenre;
}

