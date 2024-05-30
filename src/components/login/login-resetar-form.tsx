"use client";

import { useFormState, useFormStatus } from "react-dom";
import Button from "@//components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "@/components/helper/error-message";
import { useEffect, useState } from "react";
import styles from "./login-form.module.css";
import passwordReset from "@/actions/password-reset";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Resetando...</Button>
      ) : (
        <Button disabled={pending}>Resetar senha</Button>
      )}
    </>
  );
}

export default function LoginResetarForm({
  keyToken,
  login,
}: {
  login: string;
  keyToken: string;
}) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href.replace("perdeu", "resetar"));
  }, []);

  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <form action={action} className={styles.form}>
      <Input type="password" label="Nova Senha" name="password" />
      <input type="hidden" name="login" value={login} />
      <input type="hidden" name="key" value={keyToken} />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
}
