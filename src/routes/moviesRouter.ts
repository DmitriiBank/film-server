
import express from 'express'
import {movieRouter} from "./movieRouter.ts";

export const moviesRouter = express.Router();

moviesRouter.use('/movies', movieRouter);
