import React from "react"
import {PostType} from "../../../redux/store"
import styles from "../Profile.module.css"
import {Post} from "./Post/Post"
import {PostFormContainer, PostFormDataType} from "../PostForm"

type PostsPropsType = {
    postData: PostType[]
    addPost: (postText: string) => void
}


export const Posts: React.FC<PostsPropsType> = (props) => {

    const onSubmitHandler = (formData: PostFormDataType) => {
        props.addPost(formData.postBody)
        formData.postBody = ""
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
            <PostFormContainer onSubmit={onSubmitHandler}/>
            <div>
                {post}
            </div>
        </div>
    )
}