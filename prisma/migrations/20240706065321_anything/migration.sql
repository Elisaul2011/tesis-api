/*
  Warnings:

  - You are about to drop the `almacen` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nombreCiudad` to the `ciudad` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `almacen` DROP FOREIGN KEY `almacen_idCiudad_fkey`;

-- DropForeignKey
ALTER TABLE `inventario` DROP FOREIGN KEY `inventario_idAlmacen_fkey`;

-- AlterTable
ALTER TABLE `ciudad` ADD COLUMN `nombreCiudad` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `almacen`;

-- CreateTable
CREATE TABLE `almacenes` (
    `idAlmacenes` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `idPais` INTEGER NOT NULL,
    `idCiudad` INTEGER NOT NULL,

    PRIMARY KEY (`idAlmacenes`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `almacenes` ADD CONSTRAINT `almacenes_idPais_fkey` FOREIGN KEY (`idPais`) REFERENCES `pais`(`idPais`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `almacenes` ADD CONSTRAINT `almacenes_idCiudad_fkey` FOREIGN KEY (`idCiudad`) REFERENCES `ciudad`(`idCiudad`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventario` ADD CONSTRAINT `inventario_idAlmacen_fkey` FOREIGN KEY (`idAlmacen`) REFERENCES `almacenes`(`idAlmacenes`) ON DELETE RESTRICT ON UPDATE CASCADE;
