import express from 'express';
import {baseUrl, PORT} from "./config/movieConfig.ts";
import {moviesRouter} from "./routes/moviesRouter.ts";
import {errorHandler} from "./errorHandler/errorHandler.ts";
import morgan from 'morgan';
import * as fs from "node:fs";

export const launchServer = () => {
    const app = express();
    app.listen(PORT, () => console.log(`Server runs at ${baseUrl}`))
    const logStream = fs.createWriteStream('access.log', {flags: 'a'})
    //==================Middleware================
    app.use(express.json());
    app.use(morgan('dev'));
    app.use(morgan('combined', {stream: logStream}))
    // app.use((req: Request, res:Response, next:NextFunction) => next())
    //==================Router====================
    app.use('/api', moviesRouter);
    app.get('/', (_, res) => res.send('API is running'));


    app.use((req, res) => {
        res.status(404).send("Page not found")
    })

//================ErrorHandler================
    app.use(errorHandler)
}