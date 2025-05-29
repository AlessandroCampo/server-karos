/*
  Warnings:

  - You are about to drop the column `image_url` on the `cards` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `cards` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `cards` DROP COLUMN `image_url`,
    DROP COLUMN `isActive`,
    ADD COLUMN `color` ENUM('RED', 'BLUE', 'BLACK', 'GREEN', 'YELLOW', 'BROWN', 'WHITE') NOT NULL DEFAULT 'WHITE',
    ADD COLUMN `subtype` ENUM('CONTINOUS', 'EQUIP') NULL,
    ADD COLUMN `type` ENUM('MINION', 'SPELL', 'TRAP') NOT NULL DEFAULT 'MINION';
