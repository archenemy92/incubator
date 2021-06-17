import React from "react"
import {AvaDesc} from "./AvaDesc"
import {Posts} from "./Posts/Posts"
import styles from "./Profile.module.css"
import {ActionsType, PostType} from "../../redux/store"


type ProfilePropsType = {
    postData: PostType[]
    dispatch: (action: ActionsType) => void
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={styles.content}>
            <AvaDesc/>
            <Posts postData={props.postData} dispatch={props.dispatch}/>
        </div>
    )
}


