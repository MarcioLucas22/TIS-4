/*
  Warnings:

  - The primary key for the `dadosPessoais` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `medicos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `pacientes` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "dadosPessoais" DROP CONSTRAINT "dadosPessoais_fk_idPaciente_fkey";

-- AlterTable
ALTER TABLE "dadosPessoais" DROP CONSTRAINT "dadosPessoais_pkey",
ALTER COLUMN "fk_idPaciente" SET DATA TYPE TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "dadosPessoais_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "dadosPessoais_id_seq";

-- AlterTable
ALTER TABLE "medicos" DROP CONSTRAINT "medicos_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "medicos_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "medicos_id_seq";

-- AlterTable
ALTER TABLE "pacientes" DROP CONSTRAINT "pacientes_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "pacientes_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "pacientes_id_seq";

-- AddForeignKey
ALTER TABLE "dadosPessoais" ADD CONSTRAINT "dadosPessoais_fk_idPaciente_fkey" FOREIGN KEY ("fk_idPaciente") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
