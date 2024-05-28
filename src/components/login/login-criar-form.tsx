"use client";

import { useFormState, useFormStatus } from "react-dom";
import Button from "@//components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "@/components/helper/error-message";
import { useEffect } from "react";
import styles from "./login-form.module.css";
import userPost from "@/actions/user-post";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button disabled={pending}>Cadastrar</Button>
      )}
    </>
  );
}

export default function LoginCriarForm() {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);
  return (
    <form action={action} className={styles.form}>
      <Input type="text" label="Usuário" name="username" />
      <Input type="email" label="Email" name="email" />
      <Input type="password" label="Senha" name="password" />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
}
