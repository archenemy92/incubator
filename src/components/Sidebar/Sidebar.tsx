import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./Sidebar.module.css"

type SidebarPropsType = {
    name: string
    ava: string
    id: number
}

export const Sidebar: React.FC<SidebarPropsType> = (props) => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar_content}>
                <NavLink to={`/dialogs/`} activeClassName={styles.sidebar_activeLink}>
                    <div className={styles.sidebar_ava}>
                        <img alt={props.name}
                             src={props.ava}/>
                    </div>
                    <div className={styles.sidebar_userName}>{props.name}</div>
                </NavLink>
            </div>
        </div>
    )
}