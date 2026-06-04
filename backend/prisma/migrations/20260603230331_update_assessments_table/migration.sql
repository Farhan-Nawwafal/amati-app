/*
  Warnings:

  - You are about to drop the column `chapter_taken_id` on the `assessments` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `assessments` DROP FOREIGN KEY `assessments_chapter_taken_id_fkey`;

-- DropIndex
DROP INDEX `assessments_chapter_taken_id_fkey` ON `assessments`;

-- AlterTable
ALTER TABLE `assessments` DROP COLUMN `chapter_taken_id`,
    ADD COLUMN `chapterTakenId` VARCHAR(191) NULL,
    ADD COLUMN `chapter_id` VARCHAR(191) NULL,
    MODIFY `sub_chapter_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `assessments` ADD CONSTRAINT `assessments_chapter_id_fkey` FOREIGN KEY (`chapter_id`) REFERENCES `chapters`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assessments` ADD CONSTRAINT `assessments_chapterTakenId_fkey` FOREIGN KEY (`chapterTakenId`) REFERENCES `chapter_taken`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
