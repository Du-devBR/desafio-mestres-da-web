import styled from "styled-components";
import { Themes } from "../../styles/themes";

interface LinkProps {
  isActive: boolean
}

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 98px 20px 55px;
  box-shadow: 0px 3px 6px rgba(255, 0, 0, 0.53);
  background-color: ${Themes.colors.black};

  @media(max-width: 768px){
    padding: 16px 32px 8px 32px;
  }
`

export const Logo = styled.div`
  width: 122px;
  height: 54px;
  position: relative;
  background-color: ${Themes.colors.red};

  span {
    position: absolute;
    bottom: -24px;
    left: 16px;
    color: ${Themes.colors.white};
    letter-spacing: 4px;
    font-family: ${Themes.marvel.regular};
    font-size: ${Themes.fontSize.text_50};
  }
`
export const Navbar = styled.nav`
  display: flex;
  gap: 5.3125rem;
  align-items: center;

  @media(max-width: 768px){
    gap: 0.5rem;
    flex-direction: column-reverse;
  }

`
export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5.3125rem;

  @media(max-width: 1080px){
    gap: 2rem;
  }

  @media(max-width: 480px){
    gap: 1rem;
  }

`

export const ListItem = styled.li<LinkProps>`

  a{
    font-family: ${Themes.axiforma.bold};
    font-size: ${Themes.fontSize.text_30};
    color: ${(active) => active.isActive ? `${Themes.colors.white}` : `${Themes.colors.gray}` }

  }
  @media(max-width: 1080px){
    a{
      font-size: ${Themes.fontSize.text_20};
    }
  }
  @media(max-width: 768px){
    a{
      font-size: ${Themes.fontSize.text_16};
    }
  }
  @media(max-width: 480px){
    a{
      font-size: ${Themes.fontSize.text_12};
    }
  }
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: ${Themes.axiforma.light};
    font-size: ${Themes.fontSize.text_20};
    color: ${Themes.colors.gray};
  }
`
export const ProfilePicture = styled.img`
  box-shadow: 3px 3px 3px rgba(255, 0, 0, 0.19);
  border-radius: 36px;

  @media(max-width: 480px){
    width: 30px;
  }
`
