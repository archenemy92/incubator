import React from "react"
import {useDispatch} from "react-redux"
import { logout } from "../../redux/authReducer"

export const Settings = () => {
    const dispatch = useDispatch()
    return (
        <div>
            SETTINGS
            <div>
                <button onClick={()=>dispatch(logout())}>logout</button>
            </div>
        </div>
    )
}