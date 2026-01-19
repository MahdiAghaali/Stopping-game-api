-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_GameResult" (
    "resultID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userID" INTEGER NOT NULL,
    "sessionID" INTEGER,
    "datasetId" INTEGER NOT NULL,
    "stoppingStep" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "GameResult_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("userID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GameResult_sessionID_fkey" FOREIGN KEY ("sessionID") REFERENCES "Session" ("sessionID") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_GameResult" ("createdAt", "datasetId", "resultID", "score", "sessionID", "stoppingStep", "updatedAt", "userID") SELECT "createdAt", "datasetId", "resultID", "score", "sessionID", "stoppingStep", "updatedAt", "userID" FROM "GameResult";
DROP TABLE "GameResult";
ALTER TABLE "new_GameResult" RENAME TO "GameResult";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
