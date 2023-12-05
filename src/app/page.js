"use client";

import Image from "next/image";
import "./login.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { ScoreContext } from "/context/ScoreContext";
import { io } from "socket.io-client";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    // setScore(0);
    const socket = io("http://localhost:4000");
    socket.on("connect", () => {
      socket.emit("username", username);
    });
    router.push("/categories");
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <article className="login">
      <h1 className="login-title">Bienvenido 👋</h1>
      <p className="login-subtitle">Ingrese un usuario para comenzar</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            value={username}
            onChange={handleUsernameChange}
            placeholder="usuario"
            type="text"
            id="username"
            required
          />
          <label htmlFor="username">Usuario</label>
        </div>
        <button className="login-submit" type="submit">
          Ingresar
        </button>
      </form>
    </article>
  );
}
