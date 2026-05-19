-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 15 Bulan Mei 2026 pada 12.52
-- Versi server: 8.0.30
-- Versi PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_amati`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `ai_reports`
--

CREATE TABLE `ai_reports` (
  `id` varchar(30) NOT NULL,
  `user_id` varchar(30) NOT NULL,
  `chapter_taken_id` varchar(100) NOT NULL,
  `evaluation_text` text NOT NULL,
  `recomendation_list` json NOT NULL,
  `create_at` date NOT NULL,
  `update_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `assessments`
--

CREATE TABLE `assessments` (
  `id` varchar(30) NOT NULL,
  `chapter_taken_id` varchar(30) NOT NULL,
  `sub_chapter_id` varchar(30) NOT NULL,
  `title` varchar(100) NOT NULL,
  `type` enum('beginner','intermediate','advanced') NOT NULL,
  `correct_answer` int NOT NULL,
  `created_at` date NOT NULL,
  `update_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `chapters`
--

CREATE TABLE `chapters` (
  `id` varchar(30) NOT NULL,
  `name` varchar(100) NOT NULL,
  `total_sub_chapter` int NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `chapter_taken`
--

CREATE TABLE `chapter_taken` (
  `id` varchar(30) NOT NULL,
  `user_id` varchar(30) NOT NULL,
  `chapter_id` varchar(30) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `prerequisites`
--

CREATE TABLE `prerequisites` (
  `id` varchar(30) NOT NULL,
  `chapter_id` varchar(50) NOT NULL,
  `prerequisite_chapter_id` varchar(50) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `questions`
--

CREATE TABLE `questions` (
  `id` varchar(30) NOT NULL,
  `assessment_id` varchar(50) NOT NULL,
  `question` varchar(500) NOT NULL,
  `topic` int NOT NULL,
  `difficulty_level` enum('easy','medium','hard','') NOT NULL,
  `create_at` date NOT NULL,
  `update_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `sub_chapter`
--

CREATE TABLE `sub_chapter` (
  `id` varchar(30) NOT NULL,
  `chapter_id` varchar(50) NOT NULL,
  `name` varchar(30) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` varchar(30) NOT NULL,
  `name` varchar(50) NOT NULL,
  `role` enum('admin','student') NOT NULL,
  `gmail` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `birth_date` date NOT NULL,
  `created_at` date NOT NULL,
  `update_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_attempts`
--

CREATE TABLE `user_attempts` (
  `id` varchar(30) NOT NULL,
  `user_id` varchar(30) NOT NULL,
  `assessement_id` varchar(30) NOT NULL,
  `score` double NOT NULL,
  `completed_at` date NOT NULL,
  `create_at` date NOT NULL,
  `update_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_progres`
--

CREATE TABLE `user_progres` (
  `id` varchar(30) NOT NULL,
  `user_id` varchar(30) NOT NULL,
  `sub_chapter_id` varchar(30) NOT NULL,
  `chapter_taken_id` varchar(50) NOT NULL,
  `current_level` enum('beginner','intermediate','advanced') NOT NULL,
  `status` enum('not started','in-progres','done','') NOT NULL,
  `created_at` date NOT NULL,
  `update_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `ai_reports`
--
ALTER TABLE `ai_reports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `chapter_taken_id` (`chapter_taken_id`);

--
-- Indeks untuk tabel `assessments`
--
ALTER TABLE `assessments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chapter_taken_id` (`chapter_taken_id`),
  ADD KEY `sub_chapter_id` (`sub_chapter_id`);

--
-- Indeks untuk tabel `chapters`
--
ALTER TABLE `chapters`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `chapter_taken`
--
ALTER TABLE `chapter_taken`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `chapter_id` (`chapter_id`);

--
-- Indeks untuk tabel `prerequisites`
--
ALTER TABLE `prerequisites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chapter_id` (`chapter_id`),
  ADD KEY `prerequisite_chapter_id` (`prerequisite_chapter_id`);

--
-- Indeks untuk tabel `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `assessment_id` (`assessment_id`);

--
-- Indeks untuk tabel `sub_chapter`
--
ALTER TABLE `sub_chapter`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chapter_id` (`chapter_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user_attempts`
--
ALTER TABLE `user_attempts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `assessement_id` (`assessement_id`);

--
-- Indeks untuk tabel `user_progres`
--
ALTER TABLE `user_progres`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `sub_chapter_id` (`sub_chapter_id`),
  ADD KEY `chapter_taken_id` (`chapter_taken_id`);

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `ai_reports`
--
ALTER TABLE `ai_reports`
  ADD CONSTRAINT `ai_reports_ibfk_2` FOREIGN KEY (`chapter_taken_id`) REFERENCES `chapter_taken` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ai_reports_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `assessments`
--
ALTER TABLE `assessments`
  ADD CONSTRAINT `assessments_ibfk_1` FOREIGN KEY (`chapter_taken_id`) REFERENCES `chapter_taken` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `assessments_ibfk_2` FOREIGN KEY (`sub_chapter_id`) REFERENCES `sub_chapter` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `chapter_taken`
--
ALTER TABLE `chapter_taken`
  ADD CONSTRAINT `chapter_taken_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `chapter_taken_ibfk_2` FOREIGN KEY (`chapter_id`) REFERENCES `chapters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `prerequisites`
--
ALTER TABLE `prerequisites`
  ADD CONSTRAINT `prerequisites_ibfk_1` FOREIGN KEY (`chapter_id`) REFERENCES `chapters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `prerequisites_ibfk_2` FOREIGN KEY (`prerequisite_chapter_id`) REFERENCES `chapters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`assessment_id`) REFERENCES `assessments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `sub_chapter`
--
ALTER TABLE `sub_chapter`
  ADD CONSTRAINT `sub_chapter_ibfk_1` FOREIGN KEY (`chapter_id`) REFERENCES `chapters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `user_attempts`
--
ALTER TABLE `user_attempts`
  ADD CONSTRAINT `user_attempts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_attempts_ibfk_2` FOREIGN KEY (`assessement_id`) REFERENCES `assessments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `user_progres`
--
ALTER TABLE `user_progres`
  ADD CONSTRAINT `user_progres_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_progres_ibfk_2` FOREIGN KEY (`chapter_taken_id`) REFERENCES `chapter_taken` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_progres_ibfk_3` FOREIGN KEY (`sub_chapter_id`) REFERENCES `sub_chapter` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
