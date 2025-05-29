/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `cards` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Effect` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `cards_name_key` ON `cards`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Effect_name_key` ON `Effect`(`name`);
