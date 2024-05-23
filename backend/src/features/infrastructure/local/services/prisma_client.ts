import { PrismaClient } from "@prisma/client";

export class db {
  private static instance: PrismaClient;

  constructor(){}

  public static getInstance(): PrismaClient {
    if (!this.instance) {
      this.instance = new PrismaClient();
    }
    return this.instance;
  }
}