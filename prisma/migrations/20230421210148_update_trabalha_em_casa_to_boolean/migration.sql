/*
  Warnings:

  - Changed the type of `trabalhaEmCasa` on the `dados_pessoais` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "dados_pessoais" DROP COLUMN "trabalhaEmCasa",
ADD COLUMN     "trabalhaEmCasa" BOOLEAN NOT NULL;
