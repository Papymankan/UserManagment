"import"

import { User } from "@/types";
import React, { useState } from "react";
import { Input } from "./ui/Input";
import UserCard from "./UserCard";
import Loader from "./Loader";
import Link from "next/link";

interface UserListProps {
  users: User[];
  loading: boolean;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

function UserList({ users, loading, onEdit, onDelete }: UserListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Users</h1>
      <Input
        placeholder="search using name or email..."
        className="border-1 focus:!ring-0 !w-80"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Link href={"/users/new"} className="px-6 py-2 bg-blue-500 text-white rounded-2xl ml-5">new user</Link>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        {loading ? (
          <Loader />
        ) : (
          filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default UserList;
