/*
  Warnings:

  - You are about to drop the column `effectId` on the `cards` table. All the data in the column will be lost.
  - You are about to drop the column `funcJson` on the `effect` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `cards` DROP FOREIGN KEY `cards_effectId_fkey`;

-- DropIndex
DROP INDEX `cards_effectId_fkey` ON `cards`;

-- AlterTable
ALTER TABLE `cards` DROP COLUMN `effectId`;

-- AlterTable
ALTER TABLE `effect` DROP COLUMN `funcJson`,
    ADD COLUMN `bloodyFury` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `Keyword` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CardEffects` (
    `A` VARCHAR(191) NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CardEffects_AB_unique`(`A`, `B`),
    INDEX `_CardEffects_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CardKeywords` (
    `A` VARCHAR(191) NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CardKeywords_AB_unique`(`A`, `B`),
    INDEX `_CardKeywords_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CardEffects` ADD CONSTRAINT `_CardEffects_A_fkey` FOREIGN KEY (`A`) REFERENCES `cards`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CardEffects` ADD CONSTRAINT `_CardEffects_B_fkey` FOREIGN KEY (`B`) REFERENCES `Effect`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CardKeywords` ADD CONSTRAINT `_CardKeywords_A_fkey` FOREIGN KEY (`A`) REFERENCES `cards`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CardKeywords` ADD CONSTRAINT `_CardKeywords_B_fkey` FOREIGN KEY (`B`) REFERENCES `Keyword`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
