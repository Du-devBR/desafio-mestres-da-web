import { useEffect } from "react";
import { Card } from "../../componentes/card";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  fetchAllMovies,
  fetchMovieId,
  fetchMoviesByChronologyDate,
  fetchMoviesByReleaseDate,
} from "../../redux/reducer/api-reducer/action";
import { CharacterTypes } from "../characters/types";
import { SelectMovies } from "./styles";

export function Movie() {
  // Obetem os dados salvos  no state movie.
  const { movie } = useSelector((state: RootState) => state.api);
  const dispatch = useDispatch<AppDispatch>();

  // Useffect dispara a função para pegar buscar os filmes na api.
  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  /**
   * Função que será passada para o botão do Card que irá abrir o modal e renderizar os dados do item selecionado.
   * @param {number}id
   */
  const handleDispatchMovieId = (id: number) => {
    dispatch(fetchMovieId(id));
  };

  /**
   * Função para lidar com a busca de filmes filtrados com base na seleção do usuário no campo 'select'.
   * Dispara ações Redux para buscar filmes por data de lançamento ou ordem cronológica,
   * dependendo da opção selecionada pelo usuário.
   * @param {React.ChangeEvent<HTMLSelectElement>} event - O evento de mudança do elemento de seleção HTML.
   */
  const handleFetchFilteredMovies = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (event.target.value === "chronology") {
      dispatch(fetchMoviesByReleaseDate());
    }
    if (event.target.value === "release") {
      dispatch(fetchMoviesByChronologyDate());
    }
  };

  return (
    <>
      <SelectMovies>
        <select
          name=""
          id=""
          onChange={(event) => handleFetchFilteredMovies(event)}
        >
          Filtrar por
          <option value="">Filtrar por</option>
          <option value="release">Lançamento</option>
          <option value="chronology">Cronologia</option>
        </select>
      </SelectMovies>
      {movie.map((item: CharacterTypes) => (
        <Card
          key={item.id}
          data={item}
          onDispatch={() => handleDispatchMovieId(item.id)}
        />
      ))}
    </>
  );
}
