import { User } from "@/types";
import React from "react";
import { Input } from "./ui/Input";
import UserCard from "./UserCard";

interface UserListProps {
  users: User[];
}

function UserList() {
  // function UserList({ users }: UserListProps) {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Users</h1>
      <Input
        placeholder="search using name or email..."
        className="border-1 focus:!ring-0 !w-80"
      />
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        <UserCard />
      </div>
    </div>
  );
}

export default UserList;
