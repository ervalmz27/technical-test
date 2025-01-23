import { db } from '../config/firebaseConfig';
import { User } from '../entities/user';

export class UserRepository {
  private collection = db.collection('USERS');

  async updateUser(userId: string, userData: Partial<User>): Promise<void> {
    const updateData = {
      ...userData,
      updatedAt: new Date()
    };
    await this.collection.doc(userId).update(updateData);
  }

  async fetchUser(): Promise< any | null> {
    const snapshot = await this.collection.get();
   
    return snapshot ? snapshot.docs.map(doc => doc.data()) : null;
  }
}
