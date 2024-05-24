import { UserModel } from "../../../application/models/user_model";
import { db } from "./prisma_client";

export class PrismaServices {

  async unsubscribe(userId: number) {
    const db_conection = db.getInstance();
    await db_conection.user.update({
      where: { id: userId },
      data: { unsubscribed: true }
    });
  }

  async getUsers() {
    const db_conection = db.getInstance();
    const users = await db_conection.user.findMany();
    return users.map(user => UserModel.fromDataBase(user as unknown as { [key: string] : never }));
  }

  async addEmail(userEmail: string) {
    const db_conection = db.getInstance();
    await db_conection.user.create({
      data: { email: userEmail}
    });
  }

  async addEmails(userEmails: string[]) {
    const db_conection = db.getInstance();
    await db_conection.user.createMany({
      data: userEmails.map(email => ({ email }))
    });
  }

  async importContacts(csvFile: string) {
    const db_conection = db.getInstance();
    await db_conection.user.createMany({
      data: csvFile.split('\n').map(email => ({ email }))
    });
  }

  //to-do add library to read image
  async importImage() {}
}
