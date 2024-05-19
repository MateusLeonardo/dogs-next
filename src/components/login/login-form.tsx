import Login from "@/actions/login";

export default function LoginForm() {
  return (
    <>
      <form action={Login}>
        <input type="text" name="username" placeholder="Usuário" />
        <input type="password" name="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
