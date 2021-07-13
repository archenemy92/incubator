import React, {ChangeEvent, useState} from "react"
import {Posts} from "./Posts"
import {addPostAC} from "../../../redux/profileReducer"
import {Context} from "../../../Context"

type PostsContainerPropsType = {
}

export const PostsContainer: React.FC<PostsContainerPropsType> = () => {
    const [postText, setPostText] = useState("")

    return (
        <Context.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    const addPost = (postText: string) => {
                        store.dispatch(addPostAC(postText))
                        setPostText("")
                    }

                    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
                        setPostText(e.currentTarget.value)
                    }
                    return (
                        <Posts postData={state.profilePage.postData}
                               addPost={addPost}
                               postText={postText}
                               onChangeText={onChangeHandler}
                        />
                    )
                }
            }
        </Context.Consumer>
    )
}