-- CreateTable
CREATE TABLE "Usera" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "confrimPassword" TEXT NOT NULL,

    CONSTRAINT "Usera_pkey" PRIMARY KEY ("id")
);
