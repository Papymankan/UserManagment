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

interface EditUserDialogProps {
  open: boolean;
  form: { name: string; username: string; email: string; phone: string };
  onChange: (field: string, value: string) => void;
  onClose: () => void;
  onConfirm: (updatedUser: Partial<User>) => Promise<void>;
  submitLoading: boolean;
}

export function EditUserDialog({
  open,
  form,
  onChange,
  onClose,
  onConfirm,
  submitLoading,
}: EditUserDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>

        <div className="space-y-2">
          <Input
            className="border-1 focus:!ring-0"
            value={form.name}
            onChange={(e) => onChange("name", e.target.value)}
            placeholder="Name"
          />
          <Input
            className="border-1 focus:!ring-0"
            value={form.username}
            onChange={(e) => onChange("username", e.target.value)}
            placeholder="Username"
          />
          <Input
            className="border-1 focus:!ring-0"
            value={form.email}
            onChange={(e) => onChange("email", e.target.value)}
            placeholder="Email"
          />
          <Input
            className="border-1 focus:!ring-0"
            value={form.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            placeholder="Phone"
          />
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="bg-green-500 text-white hover:opacity-75"
            onClick={() => onConfirm(form)}
            disabled={submitLoading}
          >
            {submitLoading ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
