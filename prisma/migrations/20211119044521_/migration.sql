/*
  Warnings:

  - You are about to drop the column `represanteId` on the `Fornecedor` table. All the data in the column will be lost.
  - You are about to drop the `Represante` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `unidadeMedida` on the `Produto` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Fornecedor" DROP CONSTRAINT "Fornecedor_represanteId_fkey";

-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_categoriaProdutoId_fkey";

-- AlterTable
ALTER TABLE "Fornecedor" DROP COLUMN "represanteId",
ADD COLUMN     "representanteId" INTEGER,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "celular" DROP NOT NULL,
ALTER COLUMN "complemento" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "unidadeMedida",
ADD COLUMN     "unidadeMedida" TEXT NOT NULL,
ALTER COLUMN "categoriaProdutoId" DROP NOT NULL;

-- DropTable
DROP TABLE "Represante";

-- CreateTable
CREATE TABLE "Representante" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "celular" TEXT NOT NULL,

    CONSTRAINT "Representante_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Fornecedor" ADD CONSTRAINT "Fornecedor_representanteId_fkey" FOREIGN KEY ("representanteId") REFERENCES "Representante"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_categoriaProdutoId_fkey" FOREIGN KEY ("categoriaProdutoId") REFERENCES "CategoriaProduto"("id") ON DELETE SET NULL ON UPDATE CASCADE;
