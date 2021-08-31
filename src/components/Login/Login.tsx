import React from "react"
import {Field, InjectedFormProps, reduxForm} from "redux-form"

type  FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={"login"} component={"input"} placeholder={"login"} />
            </div>
            <div>
                <Field name={"password"} type={"password"} component={"input"} placeholder={"password"} />
            </div>
            <div>
                <Field name={"rememberMe"} component={"input"} type={"checkbox"} /> remember me
            </div>
            <button>Login</button>
        </form>
    )
}

const LoginContainer = reduxForm<FormDataType>({
    form: "login"
})(LoginForm)

export const Login: React.FC = () => {
    const onSubmitHandler = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginContainer onSubmit={onSubmitHandler}/>
        </div>
    )
}