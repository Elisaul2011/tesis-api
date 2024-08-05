/*
  Warnings:

  - Added the required column `necesidadesTecnicasId` to the `inventario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rolId` to the `inventario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `inventario` ADD COLUMN `necesidadesTecnicasId` INTEGER NOT NULL,
    ADD COLUMN `rolId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `inventario` ADD CONSTRAINT `inventario_necesidadesTecnicasId_fkey` FOREIGN KEY (`necesidadesTecnicasId`) REFERENCES `necesidadesTecnicas`(`idNecesidadesTecnicas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventario` ADD CONSTRAINT `inventario_rolId_fkey` FOREIGN KEY (`rolId`) REFERENCES `roles`(`idRol`) ON DELETE RESTRICT ON UPDATE CASCADE;
