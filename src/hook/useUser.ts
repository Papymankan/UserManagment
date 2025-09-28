"use client";

import { useEffect, useState } from "react";
import { userService } from "@/services/userService";
import { User } from "@/types";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    userService
      .getUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const addUser = (user: User) => setUsers((prev) => [...prev, user]);

  const removeUser = (id: number) =>
    setUsers((prev) => prev.filter((u) => u.id !== id));

  return { users, loading, error, addUser, removeUser };
}
