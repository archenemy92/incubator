import React from "react"
import {AvaDesc} from "./AvaDesc"
import styles from "./Profile.module.css"
import {PostsContainer} from "./Posts/PostsContainer"


type ProfilePropsType = {
}
export const Profile: React.FC<ProfilePropsType> = () => {
    return (
        <div className={styles.content}>
            <AvaDesc/>
            <PostsContainer/>
        </div>
    )
}


