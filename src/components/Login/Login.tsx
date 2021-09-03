import React from "react"
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {required} from "../../accets/formValidators/validators"
import {Form} from "../../accets/hoc/formControls"

type  FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const Input = Form("input")

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={"login"} component={Input} placeholder={"login"} validate={[required]}/>
            </div>
            <div>
                <Field name={"password"} type={"password"} component={Input} placeholder={"password"}
                       validate={[required]}/>
            </div>
            <div>
                <Field name={"rememberMe"} component={Input} type={"checkbox"}/> remember me
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