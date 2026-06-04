// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PreTestQuiz from "./pages/PreTestQuiz";
import PreTestQuizResult from "./pages/PreTestQuizResult";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import CoursesSubChapters from "./pages/CoursesSubChapters";
import CoursesMaterialView from "./pages/CoursesMaterialView";
import QuizList from "./pages/QuizList";
import QuizWorkspace from "./pages/QuizWorkspace";
import QuizResult from "./pages/QuizResult";
import ExamList from "./pages/ExamList";
import ExamWorkspace from "./pages/ExamWorkspace";
import ExamResult from "./pages/ExamResult";
import Settings from "./pages/Settings";
import AdminCourses from "./pages/AdminCourses";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* RUTE PUBLIK: Siapapun bisa buka (Belum Login Tidak Masalah) */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* RUTE PROTECTED: Wajib Punya Token (Kalau ga ada, auto mental ke /login) */}
      <Route element={<ProtectedRoute />}>
        {/* Pre-Test Area */}
        <Route path="/pre-test" element={<PreTestQuiz />} />
        <Route path="/pre-test/result" element={<PreTestQuizResult />} />

        {/* Core User Area */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />

        {/* Belajar & Materi Adaptif Matematika Kelas VII */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:chapterId" element={<CoursesSubChapters />} />
        <Route
          path="/material/:chapterId/:subChapterId"
          element={<CoursesMaterialView />}
        />

        {/* Fitur Kuis */}
        <Route path="/quiz" element={<QuizList />} />
        <Route path="/quiz/workspace/:assessmentId" element={<QuizWorkspace />} />
        <Route path="/quiz/result" element={<QuizResult />} />

        {/* Fitur Ujian */}
        <Route path="/exam" element={<ExamList />} />
        <Route path="/exam/workspace" element={<ExamWorkspace />} />
        <Route path="/exam/result" element={<ExamResult />} />

        {/* CMS Area Admin */}
        <Route path="/admin/courses" element={<AdminCourses />} />
      </Route>
    </Routes>
  );
}

export default App;
