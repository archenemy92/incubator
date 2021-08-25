import React from "react"
import {AvaDesc} from "./AvaDesc"
import styles from "./Profile.module.css"
import {PostsContainer} from "./Posts/PostsContainer"
import {ProfileType} from "../../redux/store"


type ProfilePropsType = {
    profile: ProfileType | null
    updateStatus: (status: string) => void
    status: string
}
export const Profile: React.FC<ProfilePropsType> = ({profile, ...restProps}) => {

    return (
        <div className={styles.content}>
            <AvaDesc profile={profile}
                     updateStatus={restProps.updateStatus}
                     status={restProps.status}/>
            <PostsContainer/>
        </div>
    )
}


