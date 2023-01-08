-- CreateTable
CREATE TABLE "A" (
    "id" TEXT NOT NULL,
    "aid" TEXT,

    CONSTRAINT "A_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "A" ADD CONSTRAINT "A_aid_fkey" FOREIGN KEY ("aid") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
