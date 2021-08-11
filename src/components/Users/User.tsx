import React from "react"
import classes from "./Users.module.css"
import {NavLink} from "react-router-dom"

let ava = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrrxsxZSpsfebkw8VLXe6R5j7mryT6PK7Pg&usqp=CAU"

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