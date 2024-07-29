/*
  Warnings:

  - Added the required column `lote` to the `inventario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `inventario` ADD COLUMN `lote` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `inspeccion` (
    `idInspeccion` INTEGER NOT NULL AUTO_INCREMENT,
    `inventarioId` INTEGER NOT NULL,
    `orderInsp` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idInspeccion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `inspeccion` ADD CONSTRAINT `inspeccion_inventarioId_fkey` FOREIGN KEY (`inventarioId`) REFERENCES `inventario`(`idInventario`) ON DELETE RESTRICT ON UPDATE CASCADE;
