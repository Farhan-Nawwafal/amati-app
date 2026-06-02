/*
  Warnings:

  - The values [beginner,intermediate,advanced] on the enum `assessments_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `assessments` MODIFY `type` ENUM('placement', 'quiz', 'exam') NOT NULL;
