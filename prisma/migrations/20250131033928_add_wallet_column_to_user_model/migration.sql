/*
  Warnings:

  - Added the required column `wallet` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "full_name" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "wallet" DECIMAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_user" ("CPF", "created_at", "email", "full_name", "id", "password", "role", "updated_at") SELECT "CPF", "created_at", "email", "full_name", "id", "password", "role", "updated_at" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_CPF_key" ON "user"("CPF");
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
