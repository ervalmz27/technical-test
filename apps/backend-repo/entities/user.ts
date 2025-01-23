  export class User {
    id: string;
    email: string;
    firstname?: string;
    lastname?: string;
    password?: string;
    phone?: string;
    address?: string;
    createdAt?: Date;
    updatedAt?: Date;
  
    constructor(id: string, email: string, firstname: string, lastname: string, password: string, phone: string, address: string, createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;
    this.phone = phone;
    this.address = address;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;

    }
  }
  export interface AllUserData {
    data : User[];
  }
  