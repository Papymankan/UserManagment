"use client";

import React, { useState } from "react";
import UserList from "../UserList";
import { useUsers } from "@/hook/useUsers";
import { EditUserDialog } from "../EditUserDialog";
import { DeleteUserDialog } from "../DeleteUserDialog";
import { User } from "@/types";
import { EditUserDialogContainer } from "./EditUserDialogContainer";

function UserListContainer() {
  const { users, loading, error, updateUser, removeUser, submitLoading } =
    useUsers();
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

      <EditUserDialogContainer
        open={!!editingUser}
        user={editingUser}
        submitLoading={submitLoading}
        onClose={() => setEditingUser(null)}
        onConfirm={async (updatedUser) => {
          await updateUser(editingUser!.id, updatedUser);
          setEditingUser(null)
        }}
        />

      <DeleteUserDialog
        open={!!deletingUser}
        submitLoading={submitLoading}
        onClose={() => setDeletingUser(null)}
        onConfirm={async () => {
          await removeUser(deletingUser!.id);
          setDeletingUser(null)
        }}
      />
    </>
  );
}

export default UserListContainer;
