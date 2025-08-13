import express from 'express';
import * as controller from '../controllers/movieController.js';

export const movieRouter = express.Router();

movieRouter.get('/compare', controller.getCompareMoviesRating);
movieRouter.get('/languages', controller.getMoviesByLanguage);
movieRouter.get('/genres', controller.getMoviesByGenres);
movieRouter.get('/top-awards', controller.getTopMoviesByAwardWins);
movieRouter.get('/grouped-rating', controller.getMoviesGroupedByRatingWithYear);

