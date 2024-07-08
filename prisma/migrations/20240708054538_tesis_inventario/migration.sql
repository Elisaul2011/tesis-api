/*
  Warnings:

  - You are about to drop the column `idCiudad` on the `almacenes` table. All the data in the column will be lost.
  - You are about to drop the column `idPais` on the `almacenes` table. All the data in the column will be lost.
  - You are about to drop the column `idATAs` on the `inventario` table. All the data in the column will be lost.
  - You are about to drop the column `idAlmacen` on the `inventario` table. All the data in the column will be lost.
  - You are about to drop the column `idEstado` on the `inventario` table. All the data in the column will be lost.
  - You are about to drop the column `idLote` on the `inventario` table. All the data in the column will be lost.
  - You are about to drop the column `idTipoAlmacen` on the `inventario` table. All the data in the column will be lost.
  - You are about to drop the column `idTypeComponents` on the `inventario` table. All the data in the column will be lost.
  - You are about to drop the column `orden` on the `inventario` table. All the data in the column will be lost.
  - You are about to drop the column `zona` on the `inventario` table. All the data in the column will be lost.
  - You are about to drop the `ciudad` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `components` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lotes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pais` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tipoalmacen` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `typecomponents` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ciudad` to the `almacenes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descripcion` to the `almacenes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `almacenes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pais` to the `almacenes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `almacenesId` to the `inventario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estadoId` to the `inventario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `inventario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoComponenteId` to the `inventario` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `shelfLife` on the `inventario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE `almacenes` DROP FOREIGN KEY `almacenes_idCiudad_fkey`;

-- DropForeignKey
ALTER TABLE `almacenes` DROP FOREIGN KEY `almacenes_idPais_fkey`;

-- DropForeignKey
ALTER TABLE `ciudad` DROP FOREIGN KEY `ciudad_idPais_fkey`;

-- DropForeignKey
ALTER TABLE `components` DROP FOREIGN KEY `components_idLote_fkey`;

-- DropForeignKey
ALTER TABLE `components` DROP FOREIGN KEY `components_idTypeComponents_fkey`;

-- DropForeignKey
ALTER TABLE `inventario` DROP FOREIGN KEY `inventario_idATAs_fkey`;

-- DropForeignKey
ALTER TABLE `inventario` DROP FOREIGN KEY `inventario_idAlmacen_fkey`;

-- DropForeignKey
ALTER TABLE `inventario` DROP FOREIGN KEY `inventario_idEstado_fkey`;

-- DropForeignKey
ALTER TABLE `inventario` DROP FOREIGN KEY `inventario_idLote_fkey`;

-- DropForeignKey
ALTER TABLE `inventario` DROP FOREIGN KEY `inventario_idTipoAlmacen_fkey`;

-- DropForeignKey
ALTER TABLE `inventario` DROP FOREIGN KEY `inventario_idTypeComponents_fkey`;

-- AlterTable
ALTER TABLE `almacenes` DROP COLUMN `idCiudad`,
    DROP COLUMN `idPais`,
    ADD COLUMN `ciudad` VARCHAR(191) NOT NULL,
    ADD COLUMN `descripcion` VARCHAR(191) NOT NULL,
    ADD COLUMN `estado` INTEGER NOT NULL,
    ADD COLUMN `pais` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `inventario` DROP COLUMN `idATAs`,
    DROP COLUMN `idAlmacen`,
    DROP COLUMN `idEstado`,
    DROP COLUMN `idLote`,
    DROP COLUMN `idTipoAlmacen`,
    DROP COLUMN `idTypeComponents`,
    DROP COLUMN `orden`,
    DROP COLUMN `zona`,
    ADD COLUMN `almacenesId` INTEGER NOT NULL,
    ADD COLUMN `estadoId` INTEGER NOT NULL,
    ADD COLUMN `order` VARCHAR(191) NOT NULL,
    ADD COLUMN `tipoComponenteId` INTEGER NOT NULL,
    MODIFY `sn` VARCHAR(191) NOT NULL,
    DROP COLUMN `shelfLife`,
    ADD COLUMN `shelfLife` DATETIME(3) NOT NULL,
    MODIFY `pn` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `ciudad`;

-- DropTable
DROP TABLE `components`;

-- DropTable
DROP TABLE `lotes`;

-- DropTable
DROP TABLE `pais`;

-- DropTable
DROP TABLE `tipoalmacen`;

-- DropTable
DROP TABLE `typecomponents`;

-- CreateTable
CREATE TABLE `aeronave` (
    `idAeronave` INTEGER NOT NULL AUTO_INCREMENT,
    `aeronave` VARCHAR(191) NOT NULL,
    `pn` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `tipoComponenteId` INTEGER NOT NULL,
    `sn` VARCHAR(191) NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `condicion` VARCHAR(191) NOT NULL,
    `workOrder` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idAeronave`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tallerReparacion` (
    `idTaller` INTEGER NOT NULL AUTO_INCREMENT,
    `taller` VARCHAR(191) NOT NULL,
    `pn` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `tipoComponenteId` INTEGER NOT NULL,
    `sn` VARCHAR(191) NOT NULL,
    `condicion` VARCHAR(191) NOT NULL,
    `workshopOrder` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idTaller`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `componente` (
    `idComponente` INTEGER NOT NULL AUTO_INCREMENT,
    `pn` VARCHAR(191) NOT NULL,
    `sn` VARCHAR(191) NOT NULL,
    `fabricante` VARCHAR(191) NOT NULL,
    `almacenesId` INTEGER NOT NULL,
    `aterrizajes` INTEGER NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `ataId` INTEGER NOT NULL,
    `zonaId` INTEGER NOT NULL,
    `tipoComponenteId` INTEGER NOT NULL,
    `horas` INTEGER NOT NULL,
    `estadoId` INTEGER NOT NULL,
    `shelfLife` DATETIME(3) NOT NULL,
    `ciclos` INTEGER NOT NULL,

    PRIMARY KEY (`idComponente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `horasManuales` (
    `idHorasManuales` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(3) NOT NULL,
    `horas` INTEGER NOT NULL,
    `ciclos` INTEGER NOT NULL,
    `aterrizajes` INTEGER NOT NULL,

    PRIMARY KEY (`idHorasManuales`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prestar` (
    `idPrestar` INTEGER NOT NULL AUTO_INCREMENT,
    `almacenesId` INTEGER NOT NULL,
    `zonaId` INTEGER NOT NULL,
    `pn` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `tipoComponenteId` INTEGER NOT NULL,
    `sn` VARCHAR(191) NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `lote` VARCHAR(191) NOT NULL,
    `condicion` VARCHAR(191) NOT NULL,
    `estadoId` INTEGER NOT NULL,

    PRIMARY KEY (`idPrestar`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reporteShelfLife` (
    `idReporteShelfLife` INTEGER NOT NULL AUTO_INCREMENT,
    `almacenesId` INTEGER NOT NULL,
    `zonaid` INTEGER NOT NULL,
    `pn` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `tipoComponenteId` INTEGER NOT NULL,
    `sn` VARCHAR(191) NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `lote` VARCHAR(191) NOT NULL,
    `estadoId` INTEGER NOT NULL,
    `shelfLife` DATETIME(3) NOT NULL,
    `venceEn` INTEGER NOT NULL,

    PRIMARY KEY (`idReporteShelfLife`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `historial` (
    `idHistorial` INTEGER NOT NULL AUTO_INCREMENT,
    `fechaMovimiento` DATETIME(3) NOT NULL,
    `pn` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `sn` VARCHAR(191) NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `origen` VARCHAR(191) NOT NULL,
    `destino` VARCHAR(191) NOT NULL,
    `realizadoPor` VARCHAR(191) NOT NULL,
    `tipoMovimientoId` INTEGER NOT NULL,
    `estadoId` INTEGER NOT NULL,
    `order` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idHistorial`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipoMovimiento` (
    `idTipoMovimiento` INTEGER NOT NULL AUTO_INCREMENT,
    `tipoMovimiento` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idTipoMovimiento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipoComponente` (
    `idTipoComponente` INTEGER NOT NULL AUTO_INCREMENT,
    `tipoComponente` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idTipoComponente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `controlMantenimiento` (
    `idControlMantenimiento` INTEGER NOT NULL AUTO_INCREMENT,
    `controlMantenimiento` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idControlMantenimiento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `zona` (
    `idZona` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`idZona`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `inventario` ADD CONSTRAINT `inventario_almacenesId_fkey` FOREIGN KEY (`almacenesId`) REFERENCES `almacenes`(`idAlmacenes`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventario` ADD CONSTRAINT `inventario_tipoComponenteId_fkey` FOREIGN KEY (`tipoComponenteId`) REFERENCES `tipoComponente`(`idTipoComponente`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventario` ADD CONSTRAINT `inventario_estadoId_fkey` FOREIGN KEY (`estadoId`) REFERENCES `estado`(`idEstado`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aeronave` ADD CONSTRAINT `aeronave_tipoComponenteId_fkey` FOREIGN KEY (`tipoComponenteId`) REFERENCES `tipoComponente`(`idTipoComponente`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tallerReparacion` ADD CONSTRAINT `tallerReparacion_tipoComponenteId_fkey` FOREIGN KEY (`tipoComponenteId`) REFERENCES `tipoComponente`(`idTipoComponente`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `componente` ADD CONSTRAINT `componente_almacenesId_fkey` FOREIGN KEY (`almacenesId`) REFERENCES `almacenes`(`idAlmacenes`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `componente` ADD CONSTRAINT `componente_ataId_fkey` FOREIGN KEY (`ataId`) REFERENCES `atas`(`IdAta`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `componente` ADD CONSTRAINT `componente_zonaId_fkey` FOREIGN KEY (`zonaId`) REFERENCES `zona`(`idZona`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `componente` ADD CONSTRAINT `componente_tipoComponenteId_fkey` FOREIGN KEY (`tipoComponenteId`) REFERENCES `tipoComponente`(`idTipoComponente`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `componente` ADD CONSTRAINT `componente_estadoId_fkey` FOREIGN KEY (`estadoId`) REFERENCES `estado`(`idEstado`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `prestar` ADD CONSTRAINT `prestar_almacenesId_fkey` FOREIGN KEY (`almacenesId`) REFERENCES `almacenes`(`idAlmacenes`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `prestar` ADD CONSTRAINT `prestar_zonaId_fkey` FOREIGN KEY (`zonaId`) REFERENCES `zona`(`idZona`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `prestar` ADD CONSTRAINT `prestar_tipoComponenteId_fkey` FOREIGN KEY (`tipoComponenteId`) REFERENCES `tipoComponente`(`idTipoComponente`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `prestar` ADD CONSTRAINT `prestar_estadoId_fkey` FOREIGN KEY (`estadoId`) REFERENCES `estado`(`idEstado`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reporteShelfLife` ADD CONSTRAINT `reporteShelfLife_almacenesId_fkey` FOREIGN KEY (`almacenesId`) REFERENCES `almacenes`(`idAlmacenes`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reporteShelfLife` ADD CONSTRAINT `reporteShelfLife_zonaid_fkey` FOREIGN KEY (`zonaid`) REFERENCES `zona`(`idZona`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reporteShelfLife` ADD CONSTRAINT `reporteShelfLife_tipoComponenteId_fkey` FOREIGN KEY (`tipoComponenteId`) REFERENCES `tipoComponente`(`idTipoComponente`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reporteShelfLife` ADD CONSTRAINT `reporteShelfLife_estadoId_fkey` FOREIGN KEY (`estadoId`) REFERENCES `estado`(`idEstado`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historial` ADD CONSTRAINT `historial_tipoMovimientoId_fkey` FOREIGN KEY (`tipoMovimientoId`) REFERENCES `tipoMovimiento`(`idTipoMovimiento`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historial` ADD CONSTRAINT `historial_estadoId_fkey` FOREIGN KEY (`estadoId`) REFERENCES `estado`(`idEstado`) ON DELETE RESTRICT ON UPDATE CASCADE;
