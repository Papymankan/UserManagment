import { User } from "@/types";
import apiClient from "./apiClient";

export const userService = {
  async getUsers(): Promise<User[]> {
    const res = await apiClient.get<User[]>("/users");
    return res.data;
  },

  async getUserById(id: number): Promise<User> {
    const res = await apiClient.get<User>(`/users/${id}`);
    return res.data;
  },

  async createUser(user: Omit<User, "id">): Promise<User> {
    const res = await apiClient.post<User>("/users", user);
    return res.data;
  },

  async deleteUser(id: number): Promise<void> {
    await apiClient.delete(`/users/${id}`);
  },
};
