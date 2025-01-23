export interface User {
  id:string;
  email: string;
  firstname?: string;
  lastname?: string;
  password?: string;
  phone?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
  
export interface UserState {
  data: User[];
  loading: boolean;
  error: string | null;
}
