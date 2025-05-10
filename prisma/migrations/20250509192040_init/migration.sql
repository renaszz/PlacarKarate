-- CreateTable
CREATE TABLE `Competidor` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NULL,
    `estado` VARCHAR(191) NULL,
    `academia` VARCHAR(191) NOT NULL,
    `vitorias` INTEGER NOT NULL DEFAULT 0,
    `medalhas` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Partida` (
    `id` VARCHAR(191) NOT NULL,
    `tipo` ENUM('KATA', 'CONFRONTO') NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `resultado` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Participacao` (
    `id` VARCHAR(191) NOT NULL,
    `partidaId` VARCHAR(191) NOT NULL,
    `competidorId` VARCHAR(191) NOT NULL,
    `resultado` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Participacao` ADD CONSTRAINT `Participacao_partidaId_fkey` FOREIGN KEY (`partidaId`) REFERENCES `Partida`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Participacao` ADD CONSTRAINT `Participacao_competidorId_fkey` FOREIGN KEY (`competidorId`) REFERENCES `Competidor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
