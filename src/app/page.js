"use client";

import Image from "next/image";
import "./login.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {
  const router = useRouter();

  const handleSubmit = (e) => {
    router.push("/categories");
  };

  axios
    .get("http://localhost:3000/categories")
    .then((response) => {
      console.log("Data:", response.data);
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });

  return (
    <article className="login">
      <h1 className="login-title">Bienvenido 👋</h1>
      <p className="login-subtitle">Ingrese un usuario para comenzar</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input placeholder="usuario" type="text" id="username" required />
          <label htmlFor="username">Usuario</label>
        </div>
        <button className="login-submit" type="submit">
          Ingresar
        </button>
      </form>
    </article>
  );
}
