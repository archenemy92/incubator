import React from "react"
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {required} from "../../accets/formValidators/validators"
import {Form} from "../../accets/hoc/formControls"
import {useDispatch, useSelector} from "react-redux"
import {login} from "../../redux/authReducer"
import {StateType} from "../../redux/store"
import {Redirect} from "react-router-dom"

type  FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const Input = Form("input")

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={"email"} component={Input} placeholder={"email"} validate={[required]}/>
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
    const isAuth = useSelector<StateType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()
    const onSubmitHandler = (formData: FormDataType) => {
        let {email, password, rememberMe} = formData
        dispatch(login(email, password, rememberMe))
    }
    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginContainer onSubmit={onSubmitHandler}/>
        </div>
    )
}