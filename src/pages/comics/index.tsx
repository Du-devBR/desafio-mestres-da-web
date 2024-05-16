import { useEffect } from "react";
import { Card } from "../../componentes/card";
import { useDispatch, useSelector } from "react-redux";
import { CharacterTypes } from "../characters/types";
import { AppDispatch, RootState } from "../../redux/store";
import {
  fetchAllComics,
  fetchComicId,
} from "../../redux/reducer/api-reducer/action";

export function Comics() {
  // Obetem os dados salvos  no state comic.
  const { comic } = useSelector((state: RootState) => state.api);
  const dispatch = useDispatch<AppDispatch>();

  // Useffect dispara a função para pegar buscar as HQs na api.
  useEffect(() => {
    dispatch(fetchAllComics());
  }, [dispatch]);

  /**
   * Função que será passada para o botão do Card que irá abrir o modal e renderizar os dados do item selecionado.
   * @param {number}id
   */
  const handleDispatchComicId = (id: number) => {
    dispatch(fetchComicId(id));
  };

  return (
    <>
      {comic.map((item: CharacterTypes) => (
        <Card
          key={item.id}
          data={item}
          onDispatch={() => handleDispatchComicId(item.id)}
        />
      ))}
    </>
  );
}
