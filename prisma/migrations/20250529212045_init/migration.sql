-- CreateTable
CREATE TABLE "decklists" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "cards" JSONB NOT NULL,

    CONSTRAINT "decklists_pkey" PRIMARY KEY ("id")
);
