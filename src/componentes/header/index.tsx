import { Link, useLocation } from "react-router-dom";
import {
  ContainerHeader,
  List,
  ListItem,
  Logo,
  Navbar,
  Profile,
  ProfilePicture,
} from "./styles";
import profilePicture from "../../assets/images/profile-picture.jpg";

export function Header() {
  /**
   * Utilizado use location para mapear qual o pathname da pagina
   */
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  /**
   * Indicador de pagina, alterando estado false para true no ListItem referente a localização da pagina
   * @param {boolean} isActive - Adiciona true caso o pathname seja igual a condição estabelecida.
   */

  return (
    <ContainerHeader>
      <Logo>
        <span>MA</span>
      </Logo>
      <Navbar>
        <List>
          <ListItem isActive={path === "personagens"}>
            <Link to={"/personagens"}>Personagens</Link>
          </ListItem>
          <ListItem isActive={path === "filmes"}>
            <Link to={"/filmes"}>Filmes</Link>
          </ListItem>
          <ListItem isActive={path === "quadrinhos"}>
            <Link to={"/quadrinhos"}>HQs</Link>
          </ListItem>
        </List>
        <Profile>
          <ProfilePicture src={profilePicture} />
          <button>Sair</button>
        </Profile>
      </Navbar>
    </ContainerHeader>
  );
}
