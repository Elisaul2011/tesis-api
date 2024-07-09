-- CreateTable
CREATE TABLE `ordenCompra` (
    `idOrdenCompra` INTEGER NOT NULL AUTO_INCREMENT,
    `ordenCompra` INTEGER NOT NULL,
    `Fecha` DATETIME(3) NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `pn` VARCHAR(191) NOT NULL,
    `sn` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idOrdenCompra`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
