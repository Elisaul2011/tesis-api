/*
  Warnings:

  - You are about to drop the column `aeronaveId` on the `historial` table. All the data in the column will be lost.
  - You are about to drop the column `inspeccionId` on the `historial` table. All the data in the column will be lost.
  - You are about to drop the column `ordenCompraId` on the `historial` table. All the data in the column will be lost.
  - You are about to drop the column `tallerId` on the `historial` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `historial` table. All the data in the column will be lost.
  - Added the required column `fechaMovimiento` to the `historial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proveedor` to the `ordenCompra` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `historial` DROP FOREIGN KEY `historial_aeronaveId_fkey`;

-- DropForeignKey
ALTER TABLE `historial` DROP FOREIGN KEY `historial_inspeccionId_fkey`;

-- DropForeignKey
ALTER TABLE `historial` DROP FOREIGN KEY `historial_ordenCompraId_fkey`;

-- DropForeignKey
ALTER TABLE `historial` DROP FOREIGN KEY `historial_tallerId_fkey`;

-- DropForeignKey
ALTER TABLE `historial` DROP FOREIGN KEY `historial_userId_fkey`;

-- AlterTable
ALTER TABLE `historial` DROP COLUMN `aeronaveId`,
    DROP COLUMN `inspeccionId`,
    DROP COLUMN `ordenCompraId`,
    DROP COLUMN `tallerId`,
    DROP COLUMN `userId`,
    ADD COLUMN `fechaMovimiento` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `ordencompra` ADD COLUMN `proveedor` VARCHAR(191) NOT NULL;
