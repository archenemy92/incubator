import React, {KeyboardEvent, useState} from "react"
import {ActionsType, addPostAC, PostType} from "../../../redux/store"
import styles from "../Profile.module.css"
import {Post} from "./Post/Post"

type PostsPropsType = {
    postData: PostType[]
    dispatch: (action: ActionsType) => void
}
export const Posts: React.FC<PostsPropsType> = (props) => {
    const [postText, setPostText] = useState("")


    let addPost = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.shiftKey && e.key === "Enter") {
            props.dispatch(addPostAC(postText))
            setPostText("")
        }

    }

    let post = props.postData.map(p => <Post key={p.id} message={p.message} like={p.like} dislike={p.dislike}
                                             ava={p.img}/>)

    return (
        <div className={styles.post}>
            <textarea className={styles.textarea}
                      value={postText}
                      onChange={(e)=>setPostText(e.currentTarget.value)}
                      onKeyPress={addPost}/>
            <div>
                {post}
            </div>
        </div>
    )
}