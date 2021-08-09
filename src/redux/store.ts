import {AddPostType, profileReducer, SetProfileType} from "./profileReducer"
import {AddMessageType, dialogReducer} from "./dialogsReducer"
import {sidebarReducer} from "./sidebarReducer"
import {combineReducers, createStore} from "redux"
import {
    FollowType,
    SetCurrentPageType, SetIsFetchingType,
    SetTotalCountType,
    SetUsersType,
    UnfollowType,
    usersReducer
} from "./usersReducer"
import {AuthMeType, authReducer} from "./authReducer"

export let ava = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrrxsxZSpsfebkw8VLXe6R5j7mryT6PK7Pg&usqp=CAU"

export type PostType = {
    message: string
    id: string
    like: number
    dislike: number
    img: string
}

export type DialogItemsType = {
    name: string
    id: string
    img: string
}

export type sidebarItemsType = {
    id: string
    name: string
    img: string
    value: string
}


export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type ProfileDataType = {
    postData: PostType[]
    profile: ProfileType | null
}
export type MessagesType = {
    id: string
    body: string
    img: string
}

export type DialogDataType = {
    dialogData: DialogItemsType[]
    messages: MessagesType[]
}

export type SidebarDataType = {
    sidebarData: sidebarItemsType[]
}
export type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type ActionsType = AddPostType | AddMessageType | FollowType |
    UnfollowType | SetUsersType | SetTotalCountType | SetCurrentPageType |
    SetIsFetchingType | SetProfileType | AuthMeType

type RootReducerType = typeof rootReducer
export type StateType = ReturnType<RootReducerType>
export type StoreType = typeof store

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export let store = createStore(rootReducer)
