import React, {ChangeEvent, KeyboardEvent, useState} from "react"
import {PostType} from "../../../redux/store"
import styles from "../Profile.module.css"
import {Post} from "./Post/Post"

type PostsPropsType = {
    postData: PostType[]
    addPost: (postText: string) => void
}


export const Posts: React.FC<PostsPropsType> = (props) => {

     const [postText, setPostText] = useState("")

    let addPost = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.shiftKey && e.key === "Enter") {
            props.addPost(postText)
              setPostText("")
        }
    }

    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
         setPostText(e.currentTarget.value)

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
                      value={postText}
                      onChange={onChangeHandler}
                      onKeyPress={addPost}/>
            <div>
                {post}
            </div>
        </div>
    )
}