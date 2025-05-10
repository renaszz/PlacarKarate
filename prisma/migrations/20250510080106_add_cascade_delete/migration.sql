/*
  Warnings:

  - Made the column `cidade` on table `competidor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `estado` on table `competidor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `resultado` on table `participacao` required. This step will fail if there are existing NULL values in that column.
  - Made the column `resultado` on table `partida` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `participacao` DROP FOREIGN KEY `Participacao_competidorId_fkey`;

-- DropForeignKey
ALTER TABLE `participacao` DROP FOREIGN KEY `Participacao_partidaId_fkey`;

-- DropIndex
DROP INDEX `Participacao_competidorId_fkey` ON `participacao`;

-- DropIndex
DROP INDEX `Participacao_partidaId_fkey` ON `participacao`;

-- AlterTable
ALTER TABLE `competidor` MODIFY `cidade` VARCHAR(191) NOT NULL,
    MODIFY `estado` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `participacao` MODIFY `resultado` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `partida` MODIFY `resultado` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Participacao` ADD CONSTRAINT `Participacao_partidaId_fkey` FOREIGN KEY (`partidaId`) REFERENCES `Partida`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Participacao` ADD CONSTRAINT `Participacao_competidorId_fkey` FOREIGN KEY (`competidorId`) REFERENCES `Competidor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
