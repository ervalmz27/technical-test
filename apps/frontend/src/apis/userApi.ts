
import Apis from "./axios";
import { User } from "@/store/types";

export const userApi = {

  ApisAllUsers: async () => {
    try {
      const response = await Apis.get(`/fetch-user-data`,{headers: {'Content-Type': 'application/json'}});
      return  response.data;
    } catch (error) {
      throw error;
    }
  },

  updateUserData: async (userId: string, data: Partial<User>) => {
    try {
      const response = await Apis.put(`/update-user-data/${userId}`, data);
      return  response;
    } catch (error) {
      throw error;
    }
  }
};