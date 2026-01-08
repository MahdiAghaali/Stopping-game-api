/*
  Warnings:

  - Added the required column `datasetId` to the `GameResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sessionID` to the `GameResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `GameResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uuid` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Session" (
    "sessionID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ownerID" INTEGER NOT NULL,
    "settings" JSONB NOT NULL,
    "playersData" JSONB NOT NULL,
    "isSessionStarted" BOOLEAN NOT NULL DEFAULT false,
    "isSessionEnded" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Session_ownerID_fkey" FOREIGN KEY ("ownerID") REFERENCES "User" ("userID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_GameResult" (
    "resultID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userID" INTEGER NOT NULL,
    "sessionID" INTEGER NOT NULL,
    "datasetId" INTEGER NOT NULL,
    "stoppingStep" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "GameResult_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("userID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GameResult_sessionID_fkey" FOREIGN KEY ("sessionID") REFERENCES "Session" ("sessionID") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_GameResult" ("resultID", "score", "stoppingStep", "userID") SELECT "resultID", "score", "stoppingStep", "userID" FROM "GameResult";
DROP TABLE "GameResult";
ALTER TABLE "new_GameResult" RENAME TO "GameResult";
CREATE TABLE "new_User" (
    "userID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "userName" TEXT,
    "email" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("email", "userID", "userName") SELECT "email", "userID", "userName" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_uuid_key" ON "User"("uuid");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
