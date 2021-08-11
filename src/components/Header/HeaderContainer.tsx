import React from "react"
import {Header} from "./Header"
import {connect} from "react-redux"
import {AuthDataType, StateType} from "../../redux/store"
import {setIsFetching} from "../../redux/usersReducer"
import {authMe} from "../../redux/authReducer"
import {authApi} from "../../api/api"

type HeaderContainerPropsType = MSTPType & MDTPType

class HeaderC extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
            authApi.me()
            .then((response) => {
                let {id, login, email} = response
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