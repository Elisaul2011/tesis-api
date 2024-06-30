/*
  Warnings:

  - You are about to drop the column `TipoATA` on the `atas` table. All the data in the column will be lost.
  - You are about to drop the `categorias` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `atas` DROP COLUMN `TipoATA`;

-- DropTable
DROP TABLE `categorias`;
