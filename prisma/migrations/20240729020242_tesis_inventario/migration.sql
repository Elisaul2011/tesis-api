-- CreateTable
CREATE TABLE `necesidadesTecnicas` (
    `idNecesidadesTecnicas` INTEGER NOT NULL AUTO_INCREMENT,
    `pn` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `cantidad` INTEGER NOT NULL,

    PRIMARY KEY (`idNecesidadesTecnicas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
