import { useDispatch } from "react-redux";
import { CardInformation, ContainerCard, Information } from "./style";
import { openModal } from "../../redux/reducer/modal-reducer/action";
import { CharacterTypes } from "../../pages/characters/types";
import { AppDispatch } from "../../redux/store";

interface CardProps {
  data: CharacterTypes;
  onDispatch: () => void;
}

export function Card({ data, onDispatch }: CardProps) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <ContainerCard imgUrl={data.thumbnail}>
      <CardInformation>
        <Information>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </Information>
        <button
          onClick={() => {
            dispatch(openModal(data.id));
            onDispatch();
          }}
        >
          Ver detalhes
        </button>
      </CardInformation>
    </ContainerCard>
  );
}
