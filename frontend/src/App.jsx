// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses'; 
import CoursesSubChapters from './pages/CoursesSubChapters';
import CoursesMaterialView from './pages/CoursesMaterialView';
import QuizList from './pages/QuizList';
import QuizWorkspace from './pages/QuizWorkspace';
import QuizResult from './pages/QuizResult';
import ExamList from './pages/ExamList';
import ExamWorkspace from './pages/ExamWorkspace';
import ExamResult from './pages/ExamResult';
import Settings from './pages/Settings';
import AdminCourses from './pages/AdminCourses';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/sub-chapters" element={<CoursesSubChapters />} />
        <Route path="/material" element={<CoursesMaterialView />} />
        <Route path="/quiz" element={<QuizList />} />
        <Route path="/quiz/workspace" element={<QuizWorkspace />} />
        <Route path="/quiz/result" element={<QuizResult />} />
        <Route path="/exam" element={<ExamList />} />
        <Route path="/exam/workspace" element={<ExamWorkspace />} />
        <Route path="/exam/result" element={<ExamResult />} />
        
        {/* TAMBAHKAN ROUTE UNTUK COURSES */}
        <Route path="/courses" element={<Courses />} />
  

        {/* DAFTARKAN ROUTE SUB CHAPTERS */}
        <Route path="/courses/:chapterId" element={<CoursesSubChapters />} />

        {/* TAMBAHKAN ROUTE UNTUK MATERI */}
        <Route path="/material/:chapterId/:subChapterId/:topicId" element={<CoursesMaterialView />} />

        {/* 2. ROUTE KHUSUS ADMIN CMS */}
        <Route path="/admin/courses" element={<AdminCourses />} />

        {/* 2. DAFTARKAN ROUTE UNTUK QUIZ LIST */}
        <Route path="/quiz" element={<QuizList />} />

        {/* 2. DAFTARKAN ROUTE BARU */}
        <Route path="/quiz/workspace" element={<QuizWorkspace />} />

        {/* 2. DAFTARKAN ROUTE FINAL KUIS */}
        <Route path="/quiz/result" element={<QuizResult />} />

        {/* 2. DAFTARKAN ROUTE BARU UNTUK EXAM */}
        <Route path="/exam" element={<ExamList />} />

        {/* 2. DAFTARKAN ROUTE WORKSPACE EXAM */}
        <Route path="/exam/workspace" element={<ExamWorkspace />} />

        {/* 2. Tambahkan rute untuk hasil ujian */}
        <Route path="/exam/result" element={<ExamResult />} />

        {/* 2. DAFTARKAN ROUTE SETTINGS */}
        <Route path="/settings" element={<Settings />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;