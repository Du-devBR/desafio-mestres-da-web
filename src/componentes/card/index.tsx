import { CharacterTypes } from "../../pages/characters/types";
import { CardInformation, ContainerCard, Information } from "./style";

interface CardProps {
  data: CharacterTypes;
}

export function Card({ data }: CardProps) {
  return (
    <ContainerCard imgUrl={data.thumbnail}>
      <CardInformation>
        <Information>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </Information>
        <button>Ver detalhes</button>
      </CardInformation>
    </ContainerCard>
  );
}
