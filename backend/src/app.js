import express from "express";
import testRouter from './routes/testRoute.js'; 
import cors from 'cors';

const createApp = () => {
    const app = express();

    app.use(express.json());
    app.use(cors());
    app.use(express.urlencoded({ extended: false }));

    // Routes
    app.use('/api/', testRouter);
    return app;
};

export default createApp;