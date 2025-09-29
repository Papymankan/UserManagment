"use client";
import React, { useState } from "react";
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
  user: User | null;
  onClose: () => void;
  onConfirm: (user: Omit<User, "id">) => void;
}

export function EditUserDialog({
  open,
  user,
  onClose,
  onConfirm,
}: EditUserDialogProps) {
  const [form, setForm] = useState(
    user || { name: "", username: "", email: "", phone: "" }
  );

  React.useEffect(() => {
    if (user) setForm(user);
  }, [user]);

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
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Name"
          />
          <Input
            className="border-1 focus:!ring-0"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            placeholder="Username"
          />
          <Input
            className="border-1 focus:!ring-0"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
          />
          <Input
            className="border-1 focus:!ring-0"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="Phone"
          />
        </div>

        <DialogFooter>
          <Button
            className="hover:!opacity-75"
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="bg-green-500 text-white hover:opacity-75"
            onClick={() => onConfirm(form)}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
