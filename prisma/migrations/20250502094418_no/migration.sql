/*
  Warnings:

  - You are about to drop the `cardeffect` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `effect` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `cardeffect` DROP FOREIGN KEY `CardEffect_cardId_fkey`;

-- DropForeignKey
ALTER TABLE `cardeffect` DROP FOREIGN KEY `CardEffect_effectId_fkey`;

-- AlterTable
ALTER TABLE `cards` ADD COLUMN `effectName` VARCHAR(191) NULL,
    ADD COLUMN `effectText` VARCHAR(191) NULL,
    ADD COLUMN `effectType` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `cardeffect`;

-- DropTable
DROP TABLE `effect`;
