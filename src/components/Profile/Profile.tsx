import React from "react"
import {AvaDesc} from "./AvaDesc"
import styles from "./Profile.module.css"
import {ActionsType, PostType} from "../../redux/store"
import {PostsContainer} from "./Posts/PostsContainer"


type ProfilePropsType = {
    postData: PostType[]
    dispatch: (action: ActionsType) => void
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={styles.content}>
            <AvaDesc/>
            <PostsContainer postData={props.postData} dispatch={props.dispatch}/>
        </div>
    )
}


