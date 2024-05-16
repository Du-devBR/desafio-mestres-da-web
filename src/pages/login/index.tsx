import { Link, useNavigate } from "react-router-dom";
import {
  ButtonSign,
  Checkbox,
  ContainerForms,
  ContainerOption,
  ContentForms,
  ErrorLoginMessage,
  FooterForm,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchLoginUser } from "../../redux/reducer/login-reducer/action";
import { AppDispatch, RootState } from "../../redux/store";
import { LoginTypes } from "./types";
import { Logo } from "../../componentes/logo";
import Swal from "sweetalert2";

export function Login() {
  /**
   * Função para chamar a action relacionada a rota Login
   * @interface AppDispatch
   */
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector((state: RootState) => state.login);

  const navigate = useNavigate();

  /**
   * Hook do react-hook-form para registro e validação dos campos do formulário.
   * Coleta eventos do input junto ao register
   * Submete os dados do formulario pelo handleSubmit
   * Adiciona erros com base nos paramentros estabelecidos dentro do register do input
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginTypes>();

  /**
   * Função para chamar o disptach de fetchLoginUser.É enviado os dados para a action.
   * @param data : LoginTypes
   */

  const handleSubmitLogin = async (data: LoginTypes) => {
    try {
      await dispatch(fetchLoginUser(data)).then((result) => {
        console.log(result);

        if (result?.type === "POST_LOGIN") {
          Swal.fire({
            icon: "success",
            title: "Registro feito com sucesso!",
            timer: 2000,
            showConfirmButton: false,
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              navigate("/");
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Usuario não encontrado!",
            timer: 2000,
            showConfirmButton: false,
          });
        }
      });
    } catch (error) {
      throw new Error("Erro ao realizar login");
    }
  };

  return (
    <ContainerForms>
      <Logo />
      <ContentForms onSubmit={handleSubmit(handleSubmitLogin)}>
        <h1>Bem-vindo(a) de volta!</h1>
        <p>Acesse sua conta</p>
        <input
          type="text"
          placeholder="Usuario"
          {...register("user", {
            required: "Campo obrigatório",
            minLength: {
              value: 4,
              message: "Deve ser maior que 4 caracteres",
            },
          })}
        />
        <input
          type="password"
          placeholder="Senha"
          {...register("password", {
            required: "Campo obrigatório",
            minLength: {
              value: 4,
              message: "Deve ser maior que 4 caracteres",
            },
          })}
        />
        {<ErrorLoginMessage>{errors.user?.message}</ErrorLoginMessage>}
        {<ErrorLoginMessage>{errors.password?.message}</ErrorLoginMessage>}
        {error ? (
          <ErrorLoginMessage>
            Usuario não cadastrado, ou dados incorretos!
          </ErrorLoginMessage>
        ) : (
          ""
        )}
        <ContainerOption>
          <Checkbox>
            <input type="checkbox" />
            <label htmlFor="">Salvar login</label>
          </Checkbox>
          <span>Esqueci a senha</span>
        </ContainerOption>
        <ButtonSign>Entrar</ButtonSign>
        <FooterForm>
          Ainda não tem o login? <Link to={"/register"}>Cadastre-se</Link>
        </FooterForm>
      </ContentForms>
    </ContainerForms>
  );
}
