import express from "express";
import userRouter from "./routes/userRouter.js";
import dashboardRouter from "./routes/dashboardRoute.js";
import chaptersRouter from "./routes/chapterRoute.js";
import subChapterRouter from "./routes/subChapterRoute.js";
import courseRoute from "./routes/courseRoute.js";
import quizRouter from "./routes/quizRoute.js";
import examsRouter from "./routes/examRoute.js";
import assessmentRoute from "./routes/assessmentRoute.js";
import cors from "cors";

const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));

  // Routes
  app.use("/api/auth", userRouter);
  app.use("/api/dashboard", dashboardRouter);
  app.use("/api/courses", courseRoute);
  app.use("/api/chapters", chaptersRouter);
  app.use("/api/assessments", assessmentRoute);
  app.use("/api/subchapters", subChapterRouter);
  app.use("/api/quiz", quizRouter);
  app.use('/api/exams', examsRouter);

  return app;
};

export default createApp;
