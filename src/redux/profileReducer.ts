import {ActionsType, ProfileDataType, ProfileType, ThunkType} from "./store"
import {v1} from "uuid"
import {profileApi} from "../api/api"
import {setIsFetching} from "./usersReducer"
import ava from "./../accets/avatar.png"

export const PROFILE_ADD_POST = "PROFILE_ADD_POST"
export const PROFILE_SET_PROFILE = "PROFILE_SET_PROFILE"
export const PROFILE_SET_PROFILE_STATUS = "PROFILE_SET_PROFILE_STATUS"


export type AddPostType = {
    type: typeof PROFILE_ADD_POST
    message: string
}
export type SetProfileType = {
    type: typeof PROFILE_SET_PROFILE
    profile: ProfileType
}
export type SetProfileStatusType = {
    type: typeof PROFILE_SET_PROFILE_STATUS
    status: string
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

export const setProfileStatus = (status: string): SetProfileStatusType => {
    return {
        type: PROFILE_SET_PROFILE_STATUS,
        status
    }
}

const initState: ProfileDataType = {
    postData: [
        {message: "Hello", id: v1(), like: 0, dislike: 0, img: ava},
        {message: "Hello my friend", id: v1(), like: 0, dislike: 0, img: ava},
        {message: "Hello dude", id: v1(), like: 0, dislike: 0, img: ava},
        {message: "Hello man", id: v1(), like: 0, dislike: 0, img: ava}
    ],
    profile: null,
    status: ""
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

export const getProfile = (userId: string): ThunkType =>
    async (dispatch) => {
        dispatch(setIsFetching(true))
        let response = await profileApi.getProfile(userId)
        dispatch(setIsFetching(false))
        dispatch(setProfile(response.data))
    }

export const getProfileStatus = (userId: string): ThunkType =>
    async (dispatch) => {
        dispatch(setIsFetching(true))
        let response = await profileApi.setProfileStatus(userId)
        dispatch(setProfileStatus(response.data))
        dispatch(setIsFetching(false))
    }

export const updateProfileStatus = (status: string): ThunkType =>
    async (dispatch) => {
        dispatch(setIsFetching(true))
        let response = await profileApi.updateProfileStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(status))
            dispatch(setIsFetching(false))
        }
    }