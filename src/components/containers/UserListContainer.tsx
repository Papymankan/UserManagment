"use client";

import React, { useState } from "react";
import UserList from "../UserList";
import { useUsers } from "@/hook/useUsers";
import { EditUserDialog } from "../EditUserDialog";
import { DeleteUserDialog } from "../DeleteUserDialog";
import { User } from "@/types";

function UserListContainer() {
  const { users, loading, error } = useUsers();
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [deletingUser, setDeletingUser] = useState<User | null>(null);
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <>
      <UserList
        users={users}
        loading={loading}
        onEdit={(user: User) => setEditingUser(user)}
        onDelete={(user: User) => setDeletingUser(user)}
      />

      <EditUserDialog
        open={!!editingUser}
        user={editingUser}
        onClose={() => setEditingUser(null)}
        onConfirm={async (updatedUser) => {
          // await updatedUser(editingUser!.id, updatedUser);
          setEditingUser(null);
        }}
      />

      <DeleteUserDialog
        open={!!deletingUser}
        onClose={() => setDeletingUser(null)}
        onConfirm={async () => {
          // await deleteUser(deletingUser!.id);
          setDeletingUser(null);
        }}
      />
    </>
  );
}

export default UserListContainer;
