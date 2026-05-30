/*
  Warnings:

  - Added the required column `content` to the `sub_chapter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `sub_chapter` ADD COLUMN `content` TEXT NOT NULL;
