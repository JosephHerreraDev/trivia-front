import Image from "next/image";
import "./login.css";
import Link from "next/link";

export default function Home() {
  return (
    <article className="login">
      <h1 className="login-title">Bienvenido 👋</h1>
      <p className="login-subtitle">Ingrese un usuario para comenzar</p>
      <form className="login-form">
        <div className="input-container">
          <input placeholder="usuario" type="text" id="username" required />
          <label htmlFor="username">Usuario</label>
        </div>
        <Link className="login-submit" type="submit" href={"/si"}>
          Ingresar
        </Link>
      </form>
    </article>
  );
}
