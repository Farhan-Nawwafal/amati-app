/*
  Warnings:

  - A unique constraint covering the columns `[gmail]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `role` ENUM('admin', 'student') NOT NULL DEFAULT 'student';

-- CreateIndex
CREATE UNIQUE INDEX `users_gmail_key` ON `users`(`gmail`);
