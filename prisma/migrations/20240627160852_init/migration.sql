-- CreateTable
CREATE TABLE `atas` (
    `IdAta` INTEGER NOT NULL AUTO_INCREMENT,
    `CodigoAta` VARCHAR(30) NOT NULL,
    `NombreATA` VARCHAR(200) NOT NULL,
    `TipoATA` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`IdAta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `idRol` INTEGER NOT NULL AUTO_INCREMENT,
    `rol` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idRol`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `idUser` INTEGER NOT NULL AUTO_INCREMENT,
    `nameUser` VARCHAR(191) NOT NULL,
    `lastnameUser` VARCHAR(191) NOT NULL,
    `rolId` INTEGER NOT NULL,
    `password` VARCHAR(50) NOT NULL,

    INDEX `User_rolId_fkey`(`rolId`),
    PRIMARY KEY (`idUser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `typeComponents` (
    `idTypeComponents` INTEGER NOT NULL AUTO_INCREMENT,
    `typeComponent` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idTypeComponents`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `components` (
    `idComponents` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,
    `fabricante` VARCHAR(191) NOT NULL,
    `sn` INTEGER NOT NULL,
    `lote` INTEGER NOT NULL,
    `idTypeComponents` INTEGER NOT NULL,
    `idLote` INTEGER NOT NULL,

    PRIMARY KEY (`idComponents`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lotes` (
    `idLotes` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo` INTEGER NOT NULL,

    PRIMARY KEY (`idLotes`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estado` (
    `idEstado` INTEGER NOT NULL AUTO_INCREMENT,
    `estado` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idEstado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipoAlmacen` (
    `idTipoAlmacen` INTEGER NOT NULL AUTO_INCREMENT,
    `tipoAlmacen` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idTipoAlmacen`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categorias` (
    `idCategorias` INTEGER NOT NULL AUTO_INCREMENT,
    `categorias` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idCategorias`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `almacen` (
    `idAlmacen` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `pais` VARCHAR(191) NOT NULL,
    `idCiudad` INTEGER NOT NULL,

    PRIMARY KEY (`idAlmacen`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ciudad` (
    `idCiudad` INTEGER NOT NULL AUTO_INCREMENT,
    `idPais` INTEGER NOT NULL,

    PRIMARY KEY (`idCiudad`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pais` (
    `idPais` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idPais`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventario` (
    `idInventario` INTEGER NOT NULL AUTO_INCREMENT,
    `idTypeComponents` INTEGER NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `sn` INTEGER NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `zona` VARCHAR(191) NOT NULL,
    `orden` VARCHAR(191) NOT NULL,
    `idEstado` INTEGER NOT NULL,
    `shelfLife` INTEGER NOT NULL,
    `pn` INTEGER NOT NULL,
    `idAlmacen` INTEGER NOT NULL,
    `idLote` INTEGER NOT NULL,
    `idTipoAlmacen` INTEGER NOT NULL,
    `idATAs` INTEGER NOT NULL,

    PRIMARY KEY (`idInventario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `User_rolId_fkey` FOREIGN KEY (`rolId`) REFERENCES `roles`(`idRol`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `components` ADD CONSTRAINT `components_idTypeComponents_fkey` FOREIGN KEY (`idTypeComponents`) REFERENCES `typeComponents`(`idTypeComponents`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `components` ADD CONSTRAINT `components_idLote_fkey` FOREIGN KEY (`idLote`) REFERENCES `lotes`(`idLotes`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `almacen` ADD CONSTRAINT `almacen_idCiudad_fkey` FOREIGN KEY (`idCiudad`) REFERENCES `ciudad`(`idCiudad`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ciudad` ADD CONSTRAINT `ciudad_idPais_fkey` FOREIGN KEY (`idPais`) REFERENCES `pais`(`idPais`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventario` ADD CONSTRAINT `inventario_idTypeComponents_fkey` FOREIGN KEY (`idTypeComponents`) REFERENCES `typeComponents`(`idTypeComponents`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventario` ADD CONSTRAINT `inventario_idEstado_fkey` FOREIGN KEY (`idEstado`) REFERENCES `estado`(`idEstado`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventario` ADD CONSTRAINT `inventario_idAlmacen_fkey` FOREIGN KEY (`idAlmacen`) REFERENCES `almacen`(`idAlmacen`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventario` ADD CONSTRAINT `inventario_idLote_fkey` FOREIGN KEY (`idLote`) REFERENCES `lotes`(`idLotes`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventario` ADD CONSTRAINT `inventario_idTipoAlmacen_fkey` FOREIGN KEY (`idTipoAlmacen`) REFERENCES `tipoAlmacen`(`idTipoAlmacen`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventario` ADD CONSTRAINT `inventario_idATAs_fkey` FOREIGN KEY (`idATAs`) REFERENCES `atas`(`IdAta`) ON DELETE RESTRICT ON UPDATE CASCADE;
