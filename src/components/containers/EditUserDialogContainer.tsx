"use client";
import React, { useEffect } from "react";
import { User } from "@/types";
import { EditUserDialog } from "../EditUserDialog";
import { useForm } from "react-hook-form";

interface EditUserDialogContainerProps {
  open: boolean;
  user: User | null;
  onClose: () => void;
  onConfirm: (updatedUser: Partial<User>) => Promise<void>;
  submitLoading: boolean;
}

type Inputs = Omit<User, "id">;

export function EditUserDialogContainer({
  open,
  user,
  onClose,
  onConfirm,
  submitLoading,
}: EditUserDialogContainerProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    defaultValues: user || { name: "", username: "", email: "", phone: "" },
  });

  useEffect(() => {
    reset(user || { name: "", username: "", email: "", phone: "" });
  }, [user, reset]);

  const submitHandler = async (data: Inputs) => {
    await onConfirm(data);
  };

  return (
    <EditUserDialog
      open={open}
      register={register}
      handleSubmit={handleSubmit(submitHandler)}
      onClose={onClose}
      submitLoading={submitLoading}
      errors={errors}
    />
  );
}
