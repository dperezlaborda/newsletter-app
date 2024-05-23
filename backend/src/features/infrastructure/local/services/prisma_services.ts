import { db } from "./prisma_client";

export class PrismaServices {
  
  async unsubscribe(userId: number) {
    const db_conection = db.getInstance();
    await db_conection.user.update({
      where: { id: userId },
      data: { unsubscribed: true }
    });
  }

  async sendNewsletter(subject: string, message: string) {
    const db_conection = db.getInstance();
    const users = await db_conection.user.findMany();
    // users.forEach(user => {
    //   if(!user.unsubscribed) {
    //   }
    // });
  }

  //todo: 
  //- agregar un email a la lista de emails
  //- agregar una lista de emails
  //- agregar un csv para importar emails--> importContacts
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

  //- agregar un csv para importar emails--> importContacts
  async importContacts(csvFile: string) {
    const db_conection = db.getInstance();
    await db_conection.user.createMany({
      data: csvFile.split('\n').map(email => ({ email }))
    });
  }
  async importImage() {}
}


//sendNewsletter 
// addEmail
