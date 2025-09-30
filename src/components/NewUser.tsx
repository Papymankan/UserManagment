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
import {
  UseFormRegister,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";
import { User } from "@/types";
import Link from "next/link";

type Inputs = Omit<User, "id">;

interface NewUserProps {
  register: UseFormRegister<Inputs>;
  handleSubmit: ReturnType<UseFormHandleSubmit<Inputs>>;
  errors: FieldErrors<Inputs>;
  submitLoading: boolean;
}

export default function NewUser({
  register,
  handleSubmit,
  errors,
  submitLoading,
}: NewUserProps) {
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <Card className="w-full max-w-md border-gray-200 !shadow-md bg-white">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Create New User</CardTitle>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter full name"
                className="border-1 focus:!ring-0"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Enter username"
                className="border-1 focus:!ring-0"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email"
                className="border-1 focus:!ring-0"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                placeholder="Enter phone number"
                className="border-1 focus:!ring-0"
                {...register("phone", { required: "Phone is required" })}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
          </CardContent>

          <CardFooter className="flex !flex-col mt-5">
            <Button
              className="w-full bg-green-500 text-white hover:opacity-75 cursor-pointer"
              variant="default"
              type="submit"
              disabled={submitLoading}
            >
              {submitLoading ? "Saving..." : "Submit"}
            </Button>

            <Link
              href={"/users"}
              className="w-full flex justify-center my-5 bg-blue-500 text-white rounded-lg py-2"
            >
              All the users
            </Link>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
