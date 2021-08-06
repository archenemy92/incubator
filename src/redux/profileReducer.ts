import {ActionsType, ProfileDataType, ProfileType} from "./store"
import {v1} from "uuid"

export const PROFILE_ADD_POST = "PROFILE_ADD_POST"
export const PROFILE_SET_PROFILE = "PROFILE_SET_PROFILE"
let ava = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrrxsxZSpsfebkw8VLXe6R5j7mryT6PK7Pg&usqp=CAU"

export type AddPostType = {
    type: typeof PROFILE_ADD_POST
    message: string
}
export type SetProfileType = {
    type: typeof PROFILE_SET_PROFILE
    profile: ProfileType
}

export const addPost = (message: string): AddPostType => {
    return {
        type: PROFILE_ADD_POST,
        message
    }
}
export const setProfile = (profile: ProfileType): SetProfileType => {
    return {
        type: PROFILE_SET_PROFILE,
        profile
    }
}

const initState: ProfileDataType = {
    postData: [
        {message: "Hello", id: v1(), like: 0, dislike: 0, img: ava},
        {message: "Hello my friend", id: v1(), like: 0, dislike: 0, img: ava},
        {message: "Hello dude", id: v1(), like: 0, dislike: 0, img: ava},
        {message: "Hello man", id: v1(), like: 0, dislike: 0, img: ava}
    ],
    profile: null
}

export const profileReducer = (state = initState, action: ActionsType): ProfileDataType => {
    switch (action.type) {
        case PROFILE_ADD_POST:
            let newPost = {
                message: action.message, id: v1(), like: 0, dislike: 0, img: ava
            }
            return {
                ...state,
                postData: [newPost, ...state.postData]
            }
        case PROFILE_SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}