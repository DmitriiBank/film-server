import * as mongoose from "mongoose";
import {MovieGenres, Languages, Countries} from "./Movie.js";


export const AwardsSchema = new mongoose.Schema({
    wins: {type: Number, default: 0},
    nominations: {type: Number, default: 0},
    text: {type: String, default: ''}
}, {
    _id: false
});

const ImdbSchema = new mongoose.Schema({
    rating: {type: Number, default: null},
    votes: {type: Number, default: null},
    id: {type: Number, default: null}
}, {
    _id: false
});

const TomatoesSchema = new mongoose.Schema({
    viewer: {
        rating: { type: Number, default: null },
        numReviews: { type: Number, default: null },
        meter: { type: Number, default: null }
    },
    fresh: { type: Number, default: null },
    critic: {
        rating: { type: Number, default: null },
        numReviews: { type: Number, default: null },
        meter: { type: Number, default: null }
    },
    rotten: { type: Number, default: null },
    lastUpdated: { type: Date, default: null }
}, { _id: false });

const MovieSchema = new mongoose.Schema({
    plot: { type: String, required: true },
    genres: {
        type: [String],
        enum: Object.values(MovieGenres),
        required: true
    },
    runtime: { type: Number, default: null },
    cast: { type: [String], default: null },
    poster: { type: String, required: true },
    title: { type: String, required: true },
    fullplot: { type: String, default: null },
    languages: {
        type: [String],
        enum: Object.values(Languages),
        required: true
    },
    released: { type: Date, default: null },
    directors: { type: [String], default: null },
    rated: { type: String, default: null },
    awards: {
        type: AwardsSchema,
        default: () => ({})
    },
    lastupdated: { type: String, default: null },
    year: { type: Number, default: null },
    imdb: {
        type: ImdbSchema,
        default: () => ({})
    },
    countries: {
        type: [String],
        enum: Object.values(Countries),
        required: true
    },
    type: { type: String, default: 'movie' },
    tomatoes: {
        type: TomatoesSchema,
        default: () => ({})
    },
    num_mflix_comments: { type: Number, default: 0 }
});

export const MovieMongooseModel = mongoose.model('Movie', MovieSchema);