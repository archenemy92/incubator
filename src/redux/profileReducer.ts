import {ActionsType, ava, PostDataType} from "./store"
import {v1} from "uuid"


export type AddPostType = {
    type: typeof PROFILE_ADD_POST
    message: string
}
export const PROFILE_ADD_POST = "PROFILE_ADD_POST"

export const addPostAC = (message: string): AddPostType => {
    return {
        type: PROFILE_ADD_POST,
        message
    }
}

export const profileReducer = (state:PostDataType, action: ActionsType): PostDataType =>{
    switch (action.type) {
        case PROFILE_ADD_POST:
            let newPost = {
                message: action.message, id: v1(), like: 0, dislike: 0, img: ava
            }
            state.postData.push(newPost)
            return state
        default:
            return state
    }
}