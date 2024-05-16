import styled, { keyframes } from "styled-components";
import { Themes } from "../../styles/themes";

const Appear = keyframes`
  0% {
    opacity: 0;
    display: none;
  }

  50%{
    opacity: 0;
    display: none;
  }

  90%{
    opacity: 0.8;
    display: flex;
  }

  100%{
    opacity: 1;
    display: flex;
  }
`

export const ContainerForms = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  margin-left: 145px;
  gap: 3rem;

  @media(max-width:768px){
    margin-left: 0;
    padding: 2rem;
  }

`

export const ContentForms = styled.form`
  display: flex;
  max-width: 500px;
  flex-direction: column;
  gap: 1rem;
  animation: ${Appear} 3s linear forwards;

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

export const ContainerOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    text-decoration: underline red;
    cursor: pointer;
    font-family: ${Themes.axiforma.medium};
    font-size: ${Themes.fontSize.text_15};
    color: ${Themes.colors.gray};
  }

`

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  label {
    font-family: ${Themes.axiforma.medium};
    font-size: ${Themes.fontSize.text_15};
    color: ${Themes.colors.gray};
  }
`

export const ButtonSign = styled.button`
  padding: 1rem 2rem;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  font-family: ${Themes.axiforma.medium};
  font-size: ${Themes.fontSize.text_28};
  color: ${Themes.colors.white};
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

export const ErrorLoginMessage = styled.span`
  font-family: ${Themes.axiforma.medium};
  font-size: ${Themes.fontSize.text_12};
  color: ${Themes.colors.red};
`
