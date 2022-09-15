/*
  Warnings:

  - A unique constraint covering the columns `[alt]` on the table `Game` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN "alt" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Game_alt_key" ON "Game"("alt");
