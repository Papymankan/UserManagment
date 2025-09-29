import { userService } from "@/services/userService";
import { User } from "@/types";
import { useEffect, useState } from "react";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await userService.getUsers();
      setUsers(data);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (user: Omit<User, "id">) => {
    try {
      setSubmitLoading(true);
      const newUser = await userService.createUser(user);
      setUsers((prev) => [...prev, newUser]);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Unknown error");
    } finally {
      setSubmitLoading(false);
    }
  };

  const updateUser = async (id: number, updatedUser: Partial<User>) => {
    try {
      setSubmitLoading(true);
      const res = await userService.updateUser(id, updatedUser);
      setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, ...res } : u)));
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Unknown error");
    } finally {
      setSubmitLoading(false);
    }
  };

  const removeUser = async (id: number) => {
    try {
      setSubmitLoading(true);
      await userService.deleteUser(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Unknown error");
    } finally {
      setSubmitLoading(false);
    }
  };

  return {
    users,
    loading,
    error,
    addUser,
    updateUser,
    removeUser,
    submitLoading,
  };
}
