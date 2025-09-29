import React from "react";
import { Button } from "./ui/Button";
import { PencilIcon, TrashIcon } from "lucide-react";
import { Card, CardContent } from "./ui/Card";
import { User } from "@/types";

type UserCardParams = {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
};

function UserCard({ user, onEdit, onDelete }: UserCardParams) {
  return (
    <Card className="border-gray-200 !shadow-md  bg-white">
      <CardContent>
        <div className="flex items-center justify-between rounded-lg">
          {/* Avatar */}
          <div className="flex items-center space-x-4">
            <span className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
              {user.name.split("")[0].toLocaleUpperCase()}
            </span>
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-500">{user.username}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
              <p className="text-sm text-gray-500">{user.phone}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex sm:flex-row flex-col sm:space-x-2 sm:space-y-0 space-y-1">
            <Button
              variant="outline"
              size="sm"
              className=" cursor-pointer hover:bg-gray-100"
              onClick={() => onEdit(user)}
            >
              <PencilIcon className="w-4 h-4 mr-1" /> Edit
            </Button>
            <Button
              variant="default"
              size="sm"
              className="bg-red-600 text-white hover:bg-red-600/70 cursor-pointer"
              onClick={() => onDelete(user)}
            >
              <TrashIcon className="w-4 h-4 mr-1" /> Delete
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default UserCard;
