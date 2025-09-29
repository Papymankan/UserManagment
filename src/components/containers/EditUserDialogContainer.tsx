"use client";
import React, { useEffect, useState } from "react";
import { User } from "@/types";
import { userService } from "@/services/userService";
import { EditUserDialog } from "../EditUserDialog";

interface EditUserDialogContainerProps {
  open: boolean;
  user: User | null;
  onClose: () => void;
  onConfirm: (updatedUser: Partial<User>) => Promise<void>;
  submitLoading: boolean;
}

export function EditUserDialogContainer({
  open,
  user,
  onClose,
  onConfirm,
  submitLoading,
}: EditUserDialogContainerProps) {
  const [form, setForm] = useState(
    user || { name: "", username: "", email: "", phone: "" }
  );

  useEffect(() => {
    if (user) setForm(user);
  }, [user]);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <EditUserDialog
      open={open}
      form={form}
      onChange={handleChange}
      onClose={onClose}
      onConfirm={onConfirm}
      submitLoading={submitLoading}
    />
  );
}
