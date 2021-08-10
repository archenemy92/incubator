import React from "react"
import {Header} from "./Header"
import axios from "axios"
import {connect} from "react-redux"
import {AuthDataType, StateType} from "../../redux/store"
import {setIsFetching} from "../../redux/usersReducer"
import {authMe} from "../../redux/authReducer"

type HeaderContainerPropsType = MSTPType & MDTPType

class HeaderC extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get<{data: {id: number, login: string, email: string}, resultCode: number, messages: string[]}>(
            `https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "ef2db174-b518-48a0-8476-91d72e746177"
                }
            })
            .then((response) => {
                let {id, login, email} = response.data.data
                this.props.authMe({id, email, login, isAuth: false})
                this.props.setIsFetching(false)
            })
    }

    render() {
        return (
            <Header {...this.props}/>)
    }
}

type MSTPType = {
    login: string | null
    isAuth: boolean
}

type MDTPType = {
    setIsFetching: (fetch: boolean) => void
    authMe: (data: AuthDataType) => void
}

const mapStateToProps = (state: StateType): MSTPType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export const HeaderContainer = connect<MSTPType, MDTPType, {}, StateType>(mapStateToProps, {
    setIsFetching, authMe
})(HeaderC)