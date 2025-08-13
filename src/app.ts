import {launchServer} from "./server.ts";
import mongoose from "mongoose";
import {db} from "./config/movieConfig.js";

mongoose.connect(db)
    .then(() => {
        console.log("MongoDB successfully connected")
        launchServer();
    })
    .catch(() => {
        console.log("Something went wrong")
    })
