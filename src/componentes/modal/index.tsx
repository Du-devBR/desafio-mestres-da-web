import {
  ContainerModal,
  ModalContent,
  ModalImg,
  ModalInfos,
  ModalList,
  ModalStars,
} from "./style";
import { AiFillStar, AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/reducer/modal-reducer/action";
import { RootState } from "../../redux/store";
import { MoviesTypes } from "../../pages/movies/types";

export function Modal() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const { contentId } = useSelector((state: RootState) => state.api);

  function multiplyStars() {
    const star = [];
    if (contentId.stars !== undefined) {
      for (let i = 0; i < contentId.stars; i++) {
        if (i <= contentId.stars) {
          star.push(<AiFillStar color="yellow" />);
        } else {
          star.push(<AiFillStar color="gray" />);
        }
      }
    }
    return star;
  }

  return (
    <ContainerModal activeModal={isOpen}>
      <ModalContent activeModal={isOpen}>
        <ModalImg src={contentId.thumbnail} />
        <ModalInfos>
          <h1>{contentId.title}</h1>
          {contentId.movies && (
            <ModalList>
              <div>
                <h2>Aparições:</h2>
                {contentId.movies?.map((item) => (
                  <li>{item}</li>
                ))}
              </div>
            </ModalList>
          )}
          {contentId.streaming_at && (
            <>
              <p>{contentId.description}</p>
              <ModalList>
                <div>
                  <h2>Disponivel em:</h2>
                  {contentId.streaming_at?.map((item: MoviesTypes) => (
                    <img src={item.thumbnail} />
                  ))}
                </div>
              </ModalList>
            </>
          )}
          {contentId.selling_at && (
            <>
              <p>{contentId.description}</p>
              <ModalList>
                <div>
                  <h2>Disponível para compra:</h2>
                  {contentId.selling_at?.map((item: MoviesTypes) => (
                    <img src={item.thumbnail} />
                  ))}
                </div>
              </ModalList>
            </>
          )}
          <ModalStars>
            <h2>Avaliações dos fãs</h2>
            <span>{multiplyStars()}</span>
          </ModalStars>
        </ModalInfos>
        <button
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          <AiOutlineCloseCircle />
        </button>
      </ModalContent>
    </ContainerModal>
  );
}
