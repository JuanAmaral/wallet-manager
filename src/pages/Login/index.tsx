import React from "react";
import { useForm } from "react-hook-form";
// import logo from "../../assets/image/logo-upu.png";

// import { ButtonEnter, Content, ForgotPassword, LoginForm, EmailInput, PasswordInput, LoginTitle, InputText, LogoUPU, LinkBtn } from "./style";

// type FormValues = {
//     email: string;
//     password: string;
// };
interface FormData {
    firstName: string
    lastName: string
};

function Login() {


    const {
        register,
        handleSubmit
    } = useForm<FormData>();
    async function onSubmit(data: FormData) {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name</label>
            <input {...register("firstName")} />
            <label>Last Name</label>
            <input {...register("lastName")} />
            <button
                type="button"
                onClick={() => {
                }}
            >
                SetValue
            </button>
            <input type="submit" />
        </form>
    );

    // const { register, handleSubmit } = useForm<FormValues>();

    // const onSubmit = handleSubmit(({ email, password }) => {
    //     return console.log(email, password);
    // })

    // return (
    //     <Content>
    //         <LogoUPU src={logo} alt="Logo Um pra Um" />
    //         <LoginForm onSubmit={onSubmit}>
    //             <LoginTitle>LOGIN</LoginTitle>
    //             <InputText>EMAIL</InputText>
    //             <EmailInput type="email" id="email" {...register("email")} />
    //             {/* <EmailIcon /> */}
    //             {/* <Test></Test> */}
    //             <InputText>SENHA</InputText>
    //             <PasswordInput type="password" id="password" {...register("password")} />
    //             <ForgotPassword href="#">ESQUECEU A SENHA</ForgotPassword>
    //             <ButtonEnter type="submit"><LinkBtn to="/">ENTRAR</LinkBtn></ButtonEnter>
    //         </LoginForm>
    //     </Content>
    // )
};

export default Login;
