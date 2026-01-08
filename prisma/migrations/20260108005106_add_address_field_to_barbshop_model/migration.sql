/*
  Warnings:

  - Added the required column `address` to the `barbershops` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "barbershops" ADD COLUMN     "address" TEXT NOT NULL;
