/*
  Warnings:

  - You are about to drop the `_cardeffects` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_cardkeywords` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Keyword` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `_cardeffects` DROP FOREIGN KEY `_CardEffects_A_fkey`;

-- DropForeignKey
ALTER TABLE `_cardeffects` DROP FOREIGN KEY `_CardEffects_B_fkey`;

-- DropForeignKey
ALTER TABLE `_cardkeywords` DROP FOREIGN KEY `_CardKeywords_A_fkey`;

-- DropForeignKey
ALTER TABLE `_cardkeywords` DROP FOREIGN KEY `_CardKeywords_B_fkey`;

-- DropTable
DROP TABLE `_cardeffects`;

-- DropTable
DROP TABLE `_cardkeywords`;

-- CreateTable
CREATE TABLE `CardEffect` (
    `cardId` VARCHAR(191) NOT NULL,
    `effectId` INTEGER NOT NULL,

    PRIMARY KEY (`cardId`, `effectId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CardKeyword` (
    `cardId` VARCHAR(191) NOT NULL,
    `keywordId` INTEGER NOT NULL,

    PRIMARY KEY (`cardId`, `keywordId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Keyword_name_key` ON `Keyword`(`name`);

-- AddForeignKey
ALTER TABLE `CardEffect` ADD CONSTRAINT `CardEffect_cardId_fkey` FOREIGN KEY (`cardId`) REFERENCES `cards`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CardEffect` ADD CONSTRAINT `CardEffect_effectId_fkey` FOREIGN KEY (`effectId`) REFERENCES `Effect`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CardKeyword` ADD CONSTRAINT `CardKeyword_cardId_fkey` FOREIGN KEY (`cardId`) REFERENCES `cards`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CardKeyword` ADD CONSTRAINT `CardKeyword_keywordId_fkey` FOREIGN KEY (`keywordId`) REFERENCES `Keyword`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
