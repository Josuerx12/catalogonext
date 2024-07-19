"use client";
import Button from "@/components/Atoms/Button";
import Input from "@/components/Atoms/Input";
import InputPassword from "@/components/Atoms/InputPassword";
import { useAuth } from "@/contexts/auth-context";
import { TLoginCredentials } from "@/interfaces/user";
import { redirect } from "next/navigation";
import React, { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

type MutationError = {
  msg?: string;
  email?: {
    msg: string;
  };
  password?: {
    msg: string;
  };
};

const LoginPage = () => {
  const { login, user } = useAuth();
  if (user) {
    redirect("/");
  }

  const { mutateAsync, isLoading, error } = useMutation<
    any,
    MutationError,
    FormData
  >(["login"], login);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    await mutateAsync(formData);
  }

  return (
    <div className="w-full min-h-screen flex flex-col gap-6">
      <h2 className="mx-auto mt-24 text-2xl font-bold">
        Página de autenticação
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 flex-1 mx-auto "
      >
        <Input placeholder="E-mail" type="email" required name="email" />
        {error?.email && (
          <p className="text-red-500">
            <span className="text-red-800 font-semibold">Error: </span>{" "}
            {error.email.msg}
          </p>
        )}
        <InputPassword
          placeholder="Informe sua senha."
          required
          name="password"
        />
        {error?.password && (
          <p className="text-red-500">
            <span className="text-red-800 font-semibold">Error: </span>{" "}
            {error.password.msg}
          </p>
        )}
        {error?.msg && (
          <p className="text-red-500">
            <span className="text-red-800 font-semibold">Error: </span>{" "}
            {error.msg}
          </p>
        )}

        <Button disabled={isLoading} type="submit">
          Logar
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
