import React from "react"
import styles from "./Post.module.css"
type PostType = {
    message: string
    like: number
    dislike: number
    ava: string
}
export const Post: React.FC<PostType> = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.post_content}>
                <img className={styles.post_ava}
                     alt={"name"}
                     src={props.ava}/>
                <div className={styles.post_text}>
                    {props.message}
                </div>
            </div>
            <div className={styles.post_actions}>
                <span>like: {props.like} </span>
                <span className={styles.post_dislike}>dislike: {props.dislike}</span>
                <span> delete</span>
            </div>
        </div>

    )
}