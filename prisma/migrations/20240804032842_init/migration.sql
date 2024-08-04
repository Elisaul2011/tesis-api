-- CreateTable
CREATE TABLE `inventario` (
    `idInventario` INTEGER NOT NULL AUTO_INCREMENT,
    `almacenesId` INTEGER NOT NULL,
    `zonaId` INTEGER NOT NULL,
    `pn` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `tipoComponenteId` INTEGER NOT NULL,
    `sn` VARCHAR(191) NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `lote` VARCHAR(191) NOT NULL,
    `fabricante` VARCHAR(191) NOT NULL,
    `estadoId` INTEGER NOT NULL,
    `shelfLife` DATETIME(3) NOT NULL,
    `order` VARCHAR(191) NOT NULL,
    `ataId` INTEGER NOT NULL,
    `horasManualesId` INTEGER NOT NULL,

    PRIMARY KEY (`idInventario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inspeccion` (
    `idInspeccion` INTEGER NOT NULL AUTO_INCREMENT,
    `inventarioId` INTEGER NOT NULL,

    PRIMARY KEY (`idInspeccion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ordenCompra` (
    `idOrdenCompra` INTEGER NOT NULL AUTO_INCREMENT,
    `ordenCompra` VARCHAR(191) NOT NULL,
    `Fecha` DATETIME(3) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `pn` VARCHAR(191) NOT NULL,
    `sn` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idOrdenCompra`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `necesidadesTecnicas` (
    `idNecesidadesTecnicas` INTEGER NOT NULL AUTO_INCREMENT,
    `pn` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `cantidad` INTEGER NOT NULL,

    PRIMARY KEY (`idNecesidadesTecnicas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `aeronave` (
    `idAeronave` INTEGER NOT NULL AUTO_INCREMENT,
    `aeronave` VARCHAR(191) NOT NULL,
    `inventarioId` INTEGER NOT NULL,

    PRIMARY KEY (`idAeronave`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tallerReparacion` (
    `idTaller` INTEGER NOT NULL AUTO_INCREMENT,
    `taller` VARCHAR(191) NOT NULL,
    `inventarioId` INTEGER NOT NULL,

    PRIMARY KEY (`idTaller`)
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
CREATE TABLE `estado` (
    `idEstado` INTEGER NOT NULL AUTO_INCREMENT,
    `estado` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idEstado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reporteShelfLife` (
    `idReporteShelfLife` INTEGER NOT NULL AUTO_INCREMENT,
    `inventarioId` INTEGER NOT NULL,
    `venceEn` INTEGER NOT NULL,

    PRIMARY KEY (`idReporteShelfLife`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `historial` (
    `idHistorial` INTEGER NOT NULL AUTO_INCREMENT,
    `inventarioId` INTEGER NOT NULL,
    `inspeccionId` INTEGER NOT NULL,
    `ordenCompraId` INTEGER NOT NULL,
    `aeronaveId` INTEGER NOT NULL,
    `tallerId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `tipoMovimientoId` INTEGER NOT NULL,

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
CREATE TABLE `atas` (
    `IdAta` INTEGER NOT NULL AUTO_INCREMENT,
    `CodigoAta` VARCHAR(30) NOT NULL,
    `NombreATA` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`IdAta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `idUser` INTEGER NOT NULL AUTO_INCREMENT,
    `nameUser` VARCHAR(191) NOT NULL,
    `lastnameUser` VARCHAR(191) NOT NULL,
    `rolId` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL,
    `password` VARCHAR(50) NOT NULL,

    INDEX `User_rolId_fkey`(`rolId`),
    PRIMARY KEY (`idUser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `almacenes` (
    `idAlmacenes` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `pais` VARCHAR(191) NOT NULL,
    `ciudad` VARCHAR(191) NOT NULL,
    `estado` INTEGER NOT NULL,

    PRIMARY KEY (`idAlmacenes`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `zona` (
    `idZona` INTEGER NOT NULL AUTO_INCREMENT,
    `zona` VARCHAR(191) NOT NULL,
    `descripcionZona` VARCHAR(191) NOT NULL,
    `almacenId` INTEGER NOT NULL,

    PRIMARY KEY (`idZona`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `idRol` INTEGER NOT NULL AUTO_INCREMENT,
    `rol` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idRol`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `inventario` ADD CONSTRAINT `inventario_almacenesId_fkey` FOREIGN KEY (`almacenesId`) REFERENCES `almacenes`(`idAlmacenes`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventario` ADD CONSTRAINT `inventario_zonaId_fkey` FOREIGN KEY (`zonaId`) REFERENCES `zona`(`idZona`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventario` ADD CONSTRAINT `inventario_tipoComponenteId_fkey` FOREIGN KEY (`tipoComponenteId`) REFERENCES `tipoComponente`(`idTipoComponente`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventario` ADD CONSTRAINT `inventario_estadoId_fkey` FOREIGN KEY (`estadoId`) REFERENCES `estado`(`idEstado`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventario` ADD CONSTRAINT `inventario_ataId_fkey` FOREIGN KEY (`ataId`) REFERENCES `atas`(`IdAta`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventario` ADD CONSTRAINT `inventario_horasManualesId_fkey` FOREIGN KEY (`horasManualesId`) REFERENCES `horasManuales`(`idHorasManuales`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inspeccion` ADD CONSTRAINT `inspeccion_inventarioId_fkey` FOREIGN KEY (`inventarioId`) REFERENCES `inventario`(`idInventario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aeronave` ADD CONSTRAINT `aeronave_inventarioId_fkey` FOREIGN KEY (`inventarioId`) REFERENCES `inventario`(`idInventario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tallerReparacion` ADD CONSTRAINT `tallerReparacion_inventarioId_fkey` FOREIGN KEY (`inventarioId`) REFERENCES `inventario`(`idInventario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reporteShelfLife` ADD CONSTRAINT `reporteShelfLife_inventarioId_fkey` FOREIGN KEY (`inventarioId`) REFERENCES `inventario`(`idInventario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historial` ADD CONSTRAINT `historial_inventarioId_fkey` FOREIGN KEY (`inventarioId`) REFERENCES `inventario`(`idInventario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historial` ADD CONSTRAINT `historial_inspeccionId_fkey` FOREIGN KEY (`inspeccionId`) REFERENCES `inspeccion`(`idInspeccion`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historial` ADD CONSTRAINT `historial_ordenCompraId_fkey` FOREIGN KEY (`ordenCompraId`) REFERENCES `ordenCompra`(`idOrdenCompra`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historial` ADD CONSTRAINT `historial_aeronaveId_fkey` FOREIGN KEY (`aeronaveId`) REFERENCES `aeronave`(`idAeronave`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historial` ADD CONSTRAINT `historial_tallerId_fkey` FOREIGN KEY (`tallerId`) REFERENCES `tallerReparacion`(`idTaller`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historial` ADD CONSTRAINT `historial_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`idUser`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historial` ADD CONSTRAINT `historial_tipoMovimientoId_fkey` FOREIGN KEY (`tipoMovimientoId`) REFERENCES `tipoMovimiento`(`idTipoMovimiento`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `User_rolId_fkey` FOREIGN KEY (`rolId`) REFERENCES `roles`(`idRol`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `zona` ADD CONSTRAINT `zona_almacenId_fkey` FOREIGN KEY (`almacenId`) REFERENCES `almacenes`(`idAlmacenes`) ON DELETE RESTRICT ON UPDATE CASCADE;
