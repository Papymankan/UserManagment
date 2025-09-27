import { User } from "@/types";
import React from "react";
import { Button } from "./ui/Button";
import { PencilIcon, TrashIcon } from "lucide-react";
import { Input } from "./ui/Input";
import { Card, CardContent } from "./ui/Card";

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
        <Card className="border-gray-200 !shadow-md">
          <CardContent>
            <div className="flex items-center justify-between rounded-lg bg-white">
              {/* Avatar */}
              <div className="flex items-center space-x-4">
                <span className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                  P
                </span>
                <div>
                  <p className="font-medium">{"Parsa"}</p>
                  <p className="text-sm text-gray-500">Papymankan</p>
                  <p className="text-sm text-gray-500">
                    parsa85rostami@gmail.com
                  </p>
                  <p className="text-sm text-gray-500">09188786856</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex sm:flex-row flex-col sm:space-x-2 sm:space-y-0 space-y-1">
                <Button
                  variant="outline"
                  size="sm"
                  className=" cursor-pointer hover:bg-gray-100"
                >
                  <PencilIcon className="w-4 h-4 mr-1" /> Edit
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="bg-red-600 text-white hover:bg-red-600/70 cursor-pointer"
                >
                  <TrashIcon className="w-4 h-4 mr-1" /> Delete
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default UserList;
