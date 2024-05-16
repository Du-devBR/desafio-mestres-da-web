import styled from "styled-components";
import { Themes } from "../../styles/themes";

export const ContainerForms = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  margin-left: 145px;

  @media(max-width:768px){
    margin-left: 0;
    justify-content: center;
    padding: 2rem;
  }
`

export const ContentForms = styled.form`
  display: flex;
  width: 500px;
  flex-direction: column;
  gap: 1rem;

  h1{
    font-family: ${Themes.axiforma.bold};
    font-size: ${Themes.fontSize.text_30};
    color: ${Themes.colors.red};
  }

  p{
    font-family: ${Themes.axiforma.thin};
    font-size: ${Themes.fontSize.text_20};
    color: ${Themes.colors.gray};
  }

  input{
    border-radius: 100px;
    border: none;
    padding: 20px 28px;
    font-family: ${Themes.axiforma.thin};
    font-size: ${Themes.fontSize.text_22};
    color: ${Themes.colors.gray};
    outline: none;
  }

  @media(max-width:480px){
    max-width: 500px;

    h1{
      font-size: ${Themes.fontSize.text_22};
    }

    p{
      font-size: ${Themes.fontSize.text_18};
    }

    input{
      padding: 16px;
      font-size: ${Themes.fontSize.text_16};
    }
  }
`

export const ButtonSignup = styled.button`
  padding: 1rem 2rem;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  font-family: ${Themes.axiforma.medium};
  font-size: ${Themes.fontSize.text_28};
  color: ${Themes.colors.gray};
  background-color: ${Themes.colors.red};

  @media(max-width:480px){
    font-size: ${Themes.fontSize.text_16};
  }
`

export const FooterForm = styled.span`
  text-align: center;
  font-family: ${Themes.axiforma.medium};
  font-size: ${Themes.fontSize.text_16};
  color: ${Themes.colors.gray};

  a{
    cursor: pointer;
    color: ${Themes.colors.red};
  }
`

export const ErrorMessage = styled.span`
  font-family: ${Themes.axiforma.medium};
  font-size: ${Themes.fontSize.text_12};
  color: ${Themes.colors.red};
`
