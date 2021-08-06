import React from "react"
import {AvaDesc} from "./AvaDesc"
import styles from "./Profile.module.css"
import {PostsContainer} from "./Posts/PostsContainer"
import {ProfileType} from "../../redux/store"


type ProfilePropsType = {
    profile: ProfileType | null
}
export const Profile: React.FC<ProfilePropsType> = ({profile}) => {

    return (
        <div className={styles.content}>
            <AvaDesc profile={profile}/>
            <PostsContainer/>
        </div>
    )
}


