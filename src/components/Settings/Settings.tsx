import React from "react"
import {useDispatch, useSelector} from "react-redux"
import { logout } from "../../redux/authReducer"
import {StateType} from "../../redux/store"
import {Redirect} from "react-router-dom"

export const Settings = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector<StateType, boolean>(state=>state.auth.isAuth)

    if (!isAuth) return <Redirect to={"/login"}/>

    return (
        <div>
            SETTINGS
            <div>
                <button onClick={()=>dispatch(logout())}>logout</button>
            </div>
        </div>
    )
}