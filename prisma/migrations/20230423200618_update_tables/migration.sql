/*
  Warnings:

  - You are about to drop the `dados_pessoais` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users_medico` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "dados_pessoais";

-- DropTable
DROP TABLE "users";

-- DropTable
DROP TABLE "users_medico";

-- CreateTable
CREATE TABLE "pacientes" (
    "id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "pacientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicos" (
    "id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "crm" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "medicos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dadosPessoais" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "conhecidoComo" TEXT NOT NULL,
    "nomeCompanheiro" TEXT NOT NULL,
    "dataNascimento" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "raca" TEXT NOT NULL,
    "trabalhaEmCasa" BOOLEAN NOT NULL,
    "ocupacao" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "telefoneFixo" TEXT NOT NULL,
    "telefoneCelular" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "dadosPessoais_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pacientes_cpf_key" ON "pacientes"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "medicos_cpf_key" ON "medicos"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "medicos_crm_key" ON "medicos"("crm");

-- CreateIndex
CREATE UNIQUE INDEX "medicos_email_key" ON "medicos"("email");
