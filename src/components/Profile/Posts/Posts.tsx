import React, {KeyboardEvent} from "react"
import {PostType} from "../../../redux/store"
import styles from "../Profile.module.css"
import {Post} from "./Post/Post"

type PostsPropsType = {
    postData: PostType[]
}
export const Posts: React.FC<PostsPropsType> = (props) => {

    let textareaValue = React.createRef<HTMLTextAreaElement>()
    let addPost = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === "Enter" && e.shiftKey) {
            let text = textareaValue.current?.value
            alert(text)
        }
    }

    let post = props.postData.map(p => <Post key={p.id} message={p.message} like={p.like} dislike={p.dislike}
                                             ava={p.img}/>)

    return (
        <div className={styles.post}>
            <textarea className={styles.textarea}
                      ref={textareaValue}
                      onKeyPress={addPost}/>
            <div>
                {post}
            </div>
        </div>
    )
}