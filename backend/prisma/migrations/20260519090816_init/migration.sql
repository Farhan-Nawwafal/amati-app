-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(30) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `role` ENUM('admin', 'student') NOT NULL,
    `gmail` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `birth_date` DATE NOT NULL,
    `created_at` DATE NOT NULL,
    `updated_at` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chapters` (
    `id` VARCHAR(30) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `total_sub_chapter` INTEGER NOT NULL,
    `created_at` DATE NOT NULL,
    `updated_at` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sub_chapter` (
    `id` VARCHAR(30) NOT NULL,
    `chapter_id` VARCHAR(50) NOT NULL,
    `name` VARCHAR(30) NOT NULL,
    `created_at` DATE NOT NULL,
    `updated_at` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chapter_taken` (
    `id` VARCHAR(30) NOT NULL,
    `user_id` VARCHAR(30) NOT NULL,
    `chapter_id` VARCHAR(30) NOT NULL,
    `created_at` DATE NOT NULL,
    `updated_at` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `assessments` (
    `id` VARCHAR(30) NOT NULL,
    `chapter_taken_id` VARCHAR(30) NOT NULL,
    `sub_chapter_id` VARCHAR(30) NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `type` ENUM('beginner', 'intermediate', 'advanced') NOT NULL,
    `correct_answer` INTEGER NOT NULL,
    `created_at` DATE NOT NULL,
    `updated_at` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ai_reports` (
    `id` VARCHAR(30) NOT NULL,
    `user_id` VARCHAR(30) NOT NULL,
    `chapter_taken_id` VARCHAR(100) NOT NULL,
    `evaluation_text` TEXT NOT NULL,
    `recomendation_list` JSON NOT NULL,
    `created_at` DATE NOT NULL,
    `updated_at` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prerequisites` (
    `id` VARCHAR(30) NOT NULL,
    `chapter_id` VARCHAR(50) NOT NULL,
    `prerequisite_chapter_id` VARCHAR(50) NOT NULL,
    `created_at` DATE NOT NULL,
    `updated_at` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `questions` (
    `id` VARCHAR(30) NOT NULL,
    `assessment_id` VARCHAR(50) NOT NULL,
    `question` VARCHAR(500) NOT NULL,
    `topic` INTEGER NOT NULL,
    `difficulty_level` ENUM('easy', 'medium', 'hard', '') NOT NULL,
    `created_at` DATE NOT NULL,
    `updated_at` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_attempts` (
    `id` VARCHAR(30) NOT NULL,
    `user_id` VARCHAR(30) NOT NULL,
    `assessement_id` VARCHAR(30) NOT NULL,
    `score` DOUBLE NOT NULL,
    `completed_at` DATE NOT NULL,
    `created_at` DATE NOT NULL,
    `updated_at` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_progres` (
    `id` VARCHAR(30) NOT NULL,
    `user_id` VARCHAR(30) NOT NULL,
    `sub_chapter_id` VARCHAR(30) NOT NULL,
    `chapter_taken_id` VARCHAR(50) NOT NULL,
    `current_level` ENUM('beginner', 'intermediate', 'advanced') NOT NULL,
    `status` ENUM('not started', 'in-progres', 'done', '') NOT NULL,
    `created_at` DATE NOT NULL,
    `updated_at` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sub_chapter` ADD CONSTRAINT `sub_chapter_chapter_id_fkey` FOREIGN KEY (`chapter_id`) REFERENCES `chapters`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `chapter_taken` ADD CONSTRAINT `chapter_taken_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `chapter_taken` ADD CONSTRAINT `chapter_taken_chapter_id_fkey` FOREIGN KEY (`chapter_id`) REFERENCES `chapters`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assessments` ADD CONSTRAINT `assessments_chapter_taken_id_fkey` FOREIGN KEY (`chapter_taken_id`) REFERENCES `chapter_taken`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assessments` ADD CONSTRAINT `assessments_sub_chapter_id_fkey` FOREIGN KEY (`sub_chapter_id`) REFERENCES `sub_chapter`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ai_reports` ADD CONSTRAINT `ai_reports_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ai_reports` ADD CONSTRAINT `ai_reports_chapter_taken_id_fkey` FOREIGN KEY (`chapter_taken_id`) REFERENCES `chapter_taken`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `prerequisites` ADD CONSTRAINT `prerequisites_chapter_id_fkey` FOREIGN KEY (`chapter_id`) REFERENCES `chapters`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `prerequisites` ADD CONSTRAINT `prerequisites_prerequisite_chapter_id_fkey` FOREIGN KEY (`prerequisite_chapter_id`) REFERENCES `chapters`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `questions` ADD CONSTRAINT `questions_assessment_id_fkey` FOREIGN KEY (`assessment_id`) REFERENCES `assessments`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_attempts` ADD CONSTRAINT `user_attempts_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_attempts` ADD CONSTRAINT `user_attempts_assessement_id_fkey` FOREIGN KEY (`assessement_id`) REFERENCES `assessments`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_progres` ADD CONSTRAINT `user_progres_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_progres` ADD CONSTRAINT `user_progres_sub_chapter_id_fkey` FOREIGN KEY (`sub_chapter_id`) REFERENCES `sub_chapter`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_progres` ADD CONSTRAINT `user_progres_chapter_taken_id_fkey` FOREIGN KEY (`chapter_taken_id`) REFERENCES `chapter_taken`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
