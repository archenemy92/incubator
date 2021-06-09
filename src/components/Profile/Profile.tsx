import React from "react"
import {AvaDesc} from "./AvaDesc"
import {Posts} from "./Posts/Posts"
import styles from "./Profile.module.css"
import {PostType} from "../../redux/store"


type ProfilePropsType = {
    postData: PostType[]
    addPost: (message: string)=>void
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={styles.content}>
            <AvaDesc/>
            <Posts postData={props.postData} addPost={props.addPost}/>
        </div>
    )
}


