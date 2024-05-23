/*
  Warnings:

  - You are about to drop the column `title` on the `Newsletter` table. All the data in the column will be lost.
  - Added the required column `title2` to the `Newsletter` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Newsletter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title2" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "sentAt" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Newsletter" ("content", "id", "sentAt") SELECT "content", "id", "sentAt" FROM "Newsletter";
DROP TABLE "Newsletter";
ALTER TABLE "new_Newsletter" RENAME TO "Newsletter";
PRAGMA foreign_key_check("Newsletter");
PRAGMA foreign_keys=ON;
