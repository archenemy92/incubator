import React from "react"
import style from "./Header.module.css"

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
}

export const Header: React.FC<HeaderPropsType> = ({login, isAuth}) => {

    return (
        <header className={style.header}>
            <img className={style.img}
                 alt={"logo"}
                 src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTyFmMV4e7Cgm3rAIKLnsrDkahJPFWL2wwIg&usqp=CAU"}/>
            <input className={style.input}/>
            {isAuth && <div className={style.login}>{login}</div>}
        </header>
    )
}