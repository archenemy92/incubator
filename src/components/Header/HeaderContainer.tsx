import React from "react"
import {Header} from "./Header"
import {useSelector} from "react-redux"
import {StateType} from "../../redux/store"

export const HeaderContainer: React.FC = () => {

    const isAuth = useSelector<StateType, boolean>(state => state.auth.isAuth)
    const login = useSelector<StateType, string | null>(state => state.auth.data.login)

    return (
        <Header isAuth={isAuth} login={login}/>
    )
}