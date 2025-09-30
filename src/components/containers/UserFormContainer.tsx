"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { User } from "@/types";
import NewUser from "../NewUser";
import { useUsersContext } from "@/Context/UsersContext";

type Inputs = Omit<User, "id">;

function NewUserFormContainer() {
  const { addUser, submitLoading } = useUsersContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    await addUser(data);
    reset();
  };

  return (
    <NewUser
      register={register}
      handleSubmit={handleSubmit(onSubmit)}
      errors={errors}
      submitLoading={submitLoading}
    />
  );
}

export default NewUserFormContainer;
