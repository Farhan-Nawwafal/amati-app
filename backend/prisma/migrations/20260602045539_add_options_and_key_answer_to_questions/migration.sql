/*
  Warnings:

  - Added the required column `key_answer` to the `questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `options` to the `questions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `questions` ADD COLUMN `key_answer` VARCHAR(191) NOT NULL,
    ADD COLUMN `options` JSON NOT NULL;
