/*
  Warnings:

  - Added the required column `descripcionZona` to the `zona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zona` to the `zona` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `zona` ADD COLUMN `descripcionZona` VARCHAR(191) NOT NULL,
    ADD COLUMN `zona` VARCHAR(191) NOT NULL;
