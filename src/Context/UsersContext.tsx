"use client";
import { createContext, useContext } from "react";
import { useUsers } from "@/hook/useUsers";

const UsersContext = createContext<ReturnType<typeof useUsers> | null>(null);

export function UsersProvider({ children }: { children: React.ReactNode }) {
  const usersHook = useUsers();
  return (
      <UsersContext.Provider value={usersHook}>
        {children}
      </UsersContext.Provider>
  );
}

export function useUsersContext() {
  const ctx = useContext(UsersContext);
  if (!ctx)
    throw new Error("useUsersContext must be used inside UsersProvider");
  return ctx;
}
