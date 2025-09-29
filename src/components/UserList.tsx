import { User } from "@/types";
import React from "react";
import { Input } from "./ui/Input";
import UserCard from "./UserCard";
import Loader from "./Loader";

interface UserListProps {
  users: User[];
  loading: boolean;
}

function UserList({ users, loading }: UserListProps) {
  
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Users</h1>
      <Input
        placeholder="search using name or email..."
        className="border-1 focus:!ring-0 !w-80"
      />
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        {loading ? (
          <Loader />
        ) : (
          users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              phone={user.phone}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default UserList;
