import { Header } from "../header";
import { Carrousel } from "../carrousel";
import { Modal } from "../modal";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Layout() {
  const navigate = useNavigate();
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
