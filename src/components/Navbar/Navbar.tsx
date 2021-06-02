import React from "react"
import {NavLink} from "react-router-dom"
import styles from "./Navbar.module.css"
import {Sidebar} from "../Sidebar/Sidebar"
import {SidebarDataType} from "../../redux/store"

type NavbarPropsType = {
    item: SidebarDataType
}

export const Navbar:React.FC<NavbarPropsType> = (props) => {

    const sidebar = props.item.sidebarData.map(i=><Sidebar key={i.id} name={i.name} ava={i.img} id={i.id}/> )
    return (
        <nav className={styles.nav}>
            <div>
                <div className={styles.nav_link}>
                    <NavLink to={"/profile"} activeClassName={styles.nav_activeLink}>PROFILE</NavLink>
                </div>
                <div className={styles.nav_link}>
                    <NavLink to={"/dialogs"} activeClassName={styles.nav_activeLink}>DIALOGS</NavLink>
                </div>
                <div className={styles.nav_link}>
                    <NavLink to={"/users"} activeClassName={styles.nav_activeLink}>USERS</NavLink>
                </div>
                <div className={styles.nav_link}>
                    <NavLink to={"/friends"} activeClassName={styles.nav_activeLink}>FRIENDS</NavLink>
                </div>
                <div className={styles.nav_link}>
                    <NavLink to={"/music"} activeClassName={styles.nav_activeLink}>MUSIC</NavLink>
                </div>
                <div className={styles.nav_link}>
                    <NavLink to={"/settings"} activeClassName={styles.nav_activeLink}>SETTINGS</NavLink>
                </div>
            </div>
            <div className={styles.side}>
                {sidebar}
            </div>

</nav>
)
}