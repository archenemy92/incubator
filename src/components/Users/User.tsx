import React from "react"
import classes from "./Users.module.css"
import {NavLink} from "react-router-dom"
import ava from "./../../accets/avatar.png"

type UserPropsType = {
    id: string
    photo: string | null
    name: string
}
export const User: React.FC<UserPropsType> = ({id, photo, name}) => {
    return (
        <div className={classes.user_content}>
            <div className={classes.user_ava}>
                <NavLink to={"/profile/" + id}>
                    <img src={photo ? photo : ava} alt={"avatar must be here"}/>
                </NavLink>
            </div>
            <div className={classes.user_name}>
                {name}
            </div>
            <div className={classes.user_descriptions}>
                descr
            </div>
        </div>
    )
}