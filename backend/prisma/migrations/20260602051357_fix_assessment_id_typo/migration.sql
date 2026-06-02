/*
  Warnings:

  - You are about to drop the column `assessement_id` on the `user_attempts` table. All the data in the column will be lost.
  - Added the required column `assessment_id` to the `user_attempts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user_attempts` DROP FOREIGN KEY `user_attempts_assessement_id_fkey`;

-- DropIndex
DROP INDEX `user_attempts_assessement_id_fkey` ON `user_attempts`;

-- AlterTable
ALTER TABLE `user_attempts` DROP COLUMN `assessement_id`,
    ADD COLUMN `assessment_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `user_attempts` ADD CONSTRAINT `user_attempts_assessment_id_fkey` FOREIGN KEY (`assessment_id`) REFERENCES `assessments`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
