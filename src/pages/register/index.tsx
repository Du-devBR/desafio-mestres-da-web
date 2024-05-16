import { Link, useNavigate } from "react-router-dom";
import {
  ButtonSignup,
  ContainerForms,
  ContentForms,
  ErrorMessage,
  FooterForm,
} from "./styles";
import { useDispatch } from "react-redux";
import { fetchRegisterUser } from "../../redux/reducer/register-reducer/action";
import { RegisterTypes } from "./types";
import { useForm } from "react-hook-form";
import { AppDispatch } from "../../redux/store";
import Swal from "sweetalert2";

export function Register() {
  /**
   * Função para chamar a action relacionada a rota Register
   * @interface AppDispatch
   */
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  /**
   * Hook do react-hook-form para registro e validação dos campos do formulário.
   * Coleta eventos do input junto ao register
   * Submete os dados do formulario pelo handleSubmit
   * Adiciona erros com base nos parametros estabelecidos dentro do register do input
   */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterTypes>();

  /**
   * Função para chamar o disptach de fetchRegisterUser.É enviado os dados para a action.
   * @param data : RegisterTypes
   */

  const handleSubmitNewUser = (data: RegisterTypes) => {
    dispatch(fetchRegisterUser(data)).then((result) => {
      if (result.payload) {
        Swal.fire({
          icon: "success",
          title: "Registro feito com sucesso!",
          timer: 2000,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            navigate("/login");
          }
        });
      }
    });
  };
  return (
    <ContainerForms>
      <ContentForms onSubmit={handleSubmit(handleSubmitNewUser)}>
        <h1>Seja bem vindo!!!</h1>
        <p>Crie uma nova conta</p>
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
              message: "A senha deve ser maior que 8 caracteres.",
            },
          })}
        />
        {<ErrorMessage>{errors.user?.message}</ErrorMessage>}
        {<ErrorMessage>{errors.password?.message}</ErrorMessage>}
        <ButtonSignup>Cadastrar</ButtonSignup>
        <FooterForm>
          Já possui um login? <Link to={"/login"}>Login</Link>
        </FooterForm>
      </ContentForms>
    </ContainerForms>
  );
}
