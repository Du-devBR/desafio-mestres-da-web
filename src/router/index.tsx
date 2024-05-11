import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Characters } from "../pages/characters";
import { Movie } from "../pages/movies";
import { Comics } from "../pages/comics";
import { Layout } from "../componentes/layout";

export function Router() {
  return (
    /**
     * Rotas utilizadas, rota princial "/" inicia em personagens. Utilizado Outlet dentro do layout principal
     */
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to={"/personagens"} />} />
        <Route path="/personagens" element={<Characters />} />
        <Route path="/filmes" element={<Movie />} />
        <Route path="/quadrinhos" element={<Comics />} />
      </Route>
    </Routes>
  );
}
