import React from "react"
import {NavLink} from "react-router-dom"
import style from "../dialogs.module.css"


type DialogItemsPropsType = {
    name: string
    id: string
    img: string
}
export const DialogItems: React.FC<DialogItemsPropsType> = (props) => {
    return (
        <div>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={style.dialogs_Link}>
                <div>
                    <img alt={props.name}
                         src={props.img}/>
                </div>
                <div>
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}