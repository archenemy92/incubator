import React from "react"
import {Header} from "./Header"
import {connect} from "react-redux"
import {StateType} from "../../redux/store"
import {getAuthData} from "../../redux/authReducer"

type HeaderContainerPropsType = MSTPType & MDTPType

class HeaderC extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.getAuthData()
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
    getAuthData: () => void
}

const mapStateToProps = (state: StateType): MSTPType => {
    return {
        login: state.auth.data.login,
        isAuth: state.auth.isAuth
    }
}

export const HeaderContainer = connect<MSTPType, MDTPType, {}, StateType>(mapStateToProps, {
    getAuthData
})(HeaderC)