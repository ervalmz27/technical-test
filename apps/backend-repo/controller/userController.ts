import { Request, Response } from 'express';
import { UserRepository } from '../repository/userCollection';

export class UserController {
  private userRepo: UserRepository;

  constructor() {
    this.userRepo = new UserRepository();
  }

  updateUserData = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.params.id;
      const userData = req.body;
      
      await this.userRepo.updateUser(userId, userData);
      res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user' });
    }
  };

  fetchUserData = async (req: Request, res: Response): Promise<void> => {
    try {      
      const user = await this.userRepo.fetchUser();      
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user' });
    }
  };
}