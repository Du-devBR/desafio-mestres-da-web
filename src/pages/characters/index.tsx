import { useEffect } from "react";
import { Card } from "../../componentes/card";
import { CharacterTypes } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  fetchAllCharacters,
  fetchCharacterId,
} from "../../redux/reducer/api-reducer/action";

export function Characters() {
  // Obetem os dados salvos  no state character.
  const { character } = useSelector((state: RootState) => state.api);
  const dispatch = useDispatch<AppDispatch>();

  // Useffect dispara a função para pegar buscar os persoganes na api.
  useEffect(() => {
    dispatch(fetchAllCharacters());
  }, [dispatch]);

  /**
   * Função que será passada para o botão do Card que irá abrir o modal e renderizar os dados do item selecionado.
   * @param {number}id
   */
  const handleDispatchCharacterId = (id: number) => {
    dispatch(fetchCharacterId(id));
  };

  return (
    <>
      {character.map((item: CharacterTypes) => (
        <Card
          key={item.id}
          data={item}
          onDispatch={() => handleDispatchCharacterId(item.id)}
        />
      ))}
    </>
  );
}
