import { userRepository } from "../repositories/user.repository";
import { UserModel } from "../models/user.model";
import type { User } from "../types/user.type";

/* =========================
SERVICE
Tugas:
1. pindahkan ke file khusus (user.service), dalam folder yang sesuai
2. import user.repository, user.model, & user.type
3. tambahkan delete(id: number) yang memanggil delete() dari userRepository
========================= */

export const userService = {

  getAll(): UserModel[] {
    return userRepository.findAll().map(u => new UserModel(u));
  },

  delete(id: number) {
    userRepository.delete(id);
  }

};