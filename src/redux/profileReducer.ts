import {ActionsType, PostDataType} from "./store"
import {v1} from "uuid"

export const PROFILE_ADD_POST = "PROFILE_ADD_POST"
let ava = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrrxsxZSpsfebkw8VLXe6R5j7mryT6PK7Pg&usqp=CAU"

export type AddPostType = {
    type: typeof PROFILE_ADD_POST
    message: string
}

export const addPostAC = (message: string): AddPostType => {
    return {
        type: PROFILE_ADD_POST,
        message
    }
}

const initState: PostDataType = {
    postData: [
        {message: "Hello", id: v1(), like: 0, dislike: 0, img: ava},
        {message: "Hello my friend", id: v1(), like: 0, dislike: 0, img: ava},
        {message: "Hello dude", id: v1(), like: 0, dislike: 0, img: ava},
        {message: "Hello man", id: v1(), like: 0, dislike: 0, img: ava}
    ]
}

export const profileReducer = (state = initState, action: ActionsType): PostDataType =>{
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