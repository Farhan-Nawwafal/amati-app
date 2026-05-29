import express from "express";
import userRouter from './routes/userRouter.js'; 
import dashboardRouter from './routes/dashboardRoute.js';
import courseRoute from "./routes/courseRoute.js";
import cors from 'cors';

const createApp = () => {
    const app = express();

    app.use(express.json());
    app.use(cors());
    app.use(express.urlencoded({ extended: false }));

    // Routes
    app.use('/api/auth', userRouter);
    app.use('/api/dashboard', dashboardRouter);
    app.use("/api/courses", courseRoute);

    return app;
};

export default createApp;