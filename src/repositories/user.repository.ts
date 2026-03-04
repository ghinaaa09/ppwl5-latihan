import { db } from "../config/db";
import type { User } from "../types/user.type";

/* =========================
   REPOSITORY (SQLite)
   Tugas:
    1. Pindahkan ke file khusus (user.repository), dalam folder yang sesuai
    2. gunakan export const ...
    3. tambahkan delete(id: number) dengan query "DELETE FROM users WHERE id = ?"
========================= */

export const userRepository = {
  findAll(): User[] {
    return db.query("SELECT id, name, role FROM users").all() as User[];
  },

  // create & update ada di file index.ts

  delete(id: number) {
    db.query("DELETE FROM users WHERE id = ?").run(id);
  }
};