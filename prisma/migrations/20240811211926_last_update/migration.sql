-- DropForeignKey
ALTER TABLE `reporteshelflife` DROP FOREIGN KEY `reporteShelfLife_inventarioId_fkey`;

-- DropForeignKey
ALTER TABLE `tallerreparacion` DROP FOREIGN KEY `tallerReparacion_inventarioId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_rolId_fkey`;

-- AddForeignKey
ALTER TABLE `reporteshelflife` ADD CONSTRAINT `reporteshelflife_inventarioId_fkey` FOREIGN KEY (`inventarioId`) REFERENCES `inventario`(`idInventario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tallerreparacion` ADD CONSTRAINT `tallerreparacion_inventarioId_fkey` FOREIGN KEY (`inventarioId`) REFERENCES `inventario`(`idInventario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_rolId_fkey` FOREIGN KEY (`rolId`) REFERENCES `roles`(`idRol`) ON DELETE RESTRICT ON UPDATE CASCADE;
