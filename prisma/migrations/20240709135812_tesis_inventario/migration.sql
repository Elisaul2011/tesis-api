/*
  Warnings:

  - You are about to drop the column `cantidad` on the `aeronave` table. All the data in the column will be lost.
  - You are about to drop the column `condicion` on the `aeronave` table. All the data in the column will be lost.
  - You are about to drop the column `descripcion` on the `aeronave` table. All the data in the column will be lost.
  - You are about to drop the column `pn` on the `aeronave` table. All the data in the column will be lost.
  - You are about to drop the column `sn` on the `aeronave` table. All the data in the column will be lost.
  - You are about to drop the column `tipoComponenteId` on the `aeronave` table. All the data in the column will be lost.
  - You are about to drop the column `condicion` on the `tallerreparacion` table. All the data in the column will be lost.
  - You are about to drop the column `descripcion` on the `tallerreparacion` table. All the data in the column will be lost.
  - You are about to drop the column `pn` on the `tallerreparacion` table. All the data in the column will be lost.
  - You are about to drop the column `sn` on the `tallerreparacion` table. All the data in the column will be lost.
  - You are about to drop the column `tipoComponenteId` on the `tallerreparacion` table. All the data in the column will be lost.
  - Added the required column `inventarioId` to the `aeronave` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zonaId` to the `almacenes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inventarioId` to the `tallerReparacion` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `aeronave` DROP FOREIGN KEY `aeronave_tipoComponenteId_fkey`;

-- DropForeignKey
ALTER TABLE `tallerreparacion` DROP FOREIGN KEY `tallerReparacion_tipoComponenteId_fkey`;

-- AlterTable
ALTER TABLE `aeronave` DROP COLUMN `cantidad`,
    DROP COLUMN `condicion`,
    DROP COLUMN `descripcion`,
    DROP COLUMN `pn`,
    DROP COLUMN `sn`,
    DROP COLUMN `tipoComponenteId`,
    ADD COLUMN `inventarioId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `almacenes` ADD COLUMN `zonaId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tallerreparacion` DROP COLUMN `condicion`,
    DROP COLUMN `descripcion`,
    DROP COLUMN `pn`,
    DROP COLUMN `sn`,
    DROP COLUMN `tipoComponenteId`,
    ADD COLUMN `inventarioId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `aeronave` ADD CONSTRAINT `aeronave_inventarioId_fkey` FOREIGN KEY (`inventarioId`) REFERENCES `inventario`(`idInventario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tallerReparacion` ADD CONSTRAINT `tallerReparacion_inventarioId_fkey` FOREIGN KEY (`inventarioId`) REFERENCES `inventario`(`idInventario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `almacenes` ADD CONSTRAINT `almacenes_zonaId_fkey` FOREIGN KEY (`zonaId`) REFERENCES `zona`(`idZona`) ON DELETE RESTRICT ON UPDATE CASCADE;
