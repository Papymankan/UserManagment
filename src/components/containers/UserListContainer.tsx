"use client";

import React from "react";
import UserList from "../UserList";
import { useUsers } from "@/hook/useUser";

function UserListContainer() {
  const { users, loading, error } = useUsers();
  if (error) return <p className="text-red-500">{error}</p>;

  return <UserList users={users} loading={loading} />;
}

export default UserListContainer;
