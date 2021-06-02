import React from "react"
import { PostType } from "../../../redux/store"
import styles from "../Profile.module.css"
import {Post} from "./Post/Post"

type PostsPropsType = {
    postData: PostType[]
}
export const Posts: React.FC<PostsPropsType> = (props) => {


    let post = props.postData.map(p=> <Post key={p.id} message={p.message} like={p.like} dislike={p.dislike} ava={p.img}/>)

    return (
        <div className={styles.post}>
            <textarea className={styles.textarea}/>
            <div>
                {post}
            </div>
        </div>
    )
}