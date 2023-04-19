/*
  Warnings:

  - You are about to drop the `dadospessoais` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "dadospessoais";

-- CreateTable
CREATE TABLE "dados_pessoais" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "conhecidoComo" TEXT NOT NULL,
    "nomeCompanheiro" TEXT NOT NULL,
    "dataNascimento" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "raca" TEXT NOT NULL,
    "trabalhaEmCasa" TEXT NOT NULL,
    "ocupacao" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "telefoneFixo" TEXT NOT NULL,
    "telefoneCelular" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "dados_pessoais_pkey" PRIMARY KEY ("id")
);
