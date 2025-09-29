"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/Dialog";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { User } from "@/types";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

interface EditUserDialogProps {
  open: boolean;
  register: UseFormRegister<Omit<User, "id">>;
  handleSubmit: ReturnType<UseFormHandleSubmit<Omit<User, "id">>>;
  onClose: () => void;
  submitLoading: boolean;
  errors: FieldErrors<Omit<User, "id">>;
}

export function EditUserDialog({
  open,
  register,
  handleSubmit,
  onClose,
  submitLoading,
  errors,
}: EditUserDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>

        <form className="space-y-2" onSubmit={handleSubmit}>
          <Input
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <Input
            placeholder="Username"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}

          <Input
            className="border-1 focus:!ring-0"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />

          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <Input
            placeholder="Phone"
            {...register("phone", { required: "Phone number is required" })}
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-green-500 text-white hover:opacity-75"
              disabled={submitLoading}
            >
              {submitLoading ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
