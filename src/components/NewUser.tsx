"use client";

import { Button } from "./ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";

export default function NewUser() {
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <Card className="w-full max-w-md border-gray-200 !shadow-md bg-white">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Create New User</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter full name"
              className="border-1 focus:!ring-0"
            />
          </div>

          {/* Username */}
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="Enter username"
              className="border-1 focus:!ring-0"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email"
              className="border-1 focus:!ring-0"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              placeholder="Enter phone number"
              className="border-1 focus:!ring-0"
            />
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full bg-green-500 text-white hover:opacity-75 cursor-pointer" variant={'default'} >Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
