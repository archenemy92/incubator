import React, {ChangeEvent, KeyboardEvent} from "react"
import {PostType} from "../../../redux/store"
import styles from "../Profile.module.css"
import {Post} from "./Post/Post"

type PostsPropsType = {
    postData: PostType[]
    addPost: (postText: string) => void
    postText: string
    onChangeText: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
export const Posts: React.FC<PostsPropsType> = (props) => {

    let addPost = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.shiftKey && e.key === "Enter") {
            props.addPost(props.postText)
        }
    }

    let post = props.postData.map(p => <Post
        key={p.id}
        message={p.message}
        like={p.like}
        dislike={p.dislike}
        ava={p.img}
    />)

    return (
        <div className={styles.post}>
            <textarea className={styles.textarea}
                      value={props.postText}
                      onChange={(e) => props.onChangeText(e)}
                      onKeyPress={addPost}/>
            <div>
                {post}
            </div>
        </div>
    )
}