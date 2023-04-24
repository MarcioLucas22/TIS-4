/*
  Warnings:

  - The primary key for the `dadosPessoais` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `dadosPessoais` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `medicos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `medicos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `pacientes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `pacientes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[fk_idPaciente]` on the table `dadosPessoais` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fk_idPaciente` to the `dadosPessoais` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "dadosPessoais" DROP CONSTRAINT "dadosPessoais_pkey",
ADD COLUMN     "fk_idPaciente" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "dadosPessoais_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "medicos" DROP CONSTRAINT "medicos_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "medicos_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "pacientes" DROP CONSTRAINT "pacientes_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "pacientes_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "dadosPessoais_fk_idPaciente_key" ON "dadosPessoais"("fk_idPaciente");

-- AddForeignKey
ALTER TABLE "dadosPessoais" ADD CONSTRAINT "dadosPessoais_fk_idPaciente_fkey" FOREIGN KEY ("fk_idPaciente") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
