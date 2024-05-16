import { Header } from "../header";
import { Carrousel } from "../carrousel";
import { Modal } from "../modal";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Layout() {
  const navigate = useNavigate();

  /**
   * Verificação se o usuario esta registrado no local storage, caso não esteja será redirecionado para login.
   */
  useEffect(() => {
    const token = localStorage.getItem("user");
    if (!token) {
      navigate("/login");
    }
  });
  return (
    <>
      <Modal />
      <Header />
      <Carrousel />
    </>
  );
}
