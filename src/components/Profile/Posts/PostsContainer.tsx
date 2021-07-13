import React, {ChangeEvent, useState} from "react"
import {Posts} from "./Posts"
import {ActionsType, PostType} from "../../../redux/store"
import {addPostAC} from "../../../redux/profileReducer"

type PostsContainerPropsType = {
    postData: PostType[]
    dispatch: (action: ActionsType) => void
}

export const PostsContainer: React.FC<PostsContainerPropsType> = (props) => {
    const [postText, setPostText] = useState("")

    const addPost = (postText: string) => {
        props.dispatch(addPostAC(postText))
        setPostText("")
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPostText(e.currentTarget.value)
    }

    return (
        <Posts postData={props.postData}
               addPost={addPost}
               postText={postText}
               onChangeText={onChangeHandler}
        />
    )
}