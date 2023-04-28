-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Folha" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mes" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "horas" REAL NOT NULL,
    "valor" REAL NOT NULL,
    "calculada" BOOLEAN,
    "funcionarioId" INTEGER NOT NULL,
    CONSTRAINT "Folha_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "Funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Folha" ("ano", "calculada", "funcionarioId", "horas", "id", "mes", "valor") SELECT "ano", "calculada", "funcionarioId", "horas", "id", "mes", "valor" FROM "Folha";
DROP TABLE "Folha";
ALTER TABLE "new_Folha" RENAME TO "Folha";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
