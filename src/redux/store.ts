import {AddPostType, profileReducer} from "./profileReducer"
import {AddMessageType, dialogReducer} from "./dialogsReducer"
import {sidebarReducer} from "./sidebarReducer"
import {combineReducers, createStore } from "redux"
import {FollowType, SetUsersType, UnfollowType, usersReducer} from "./usersReducer"

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

export type PostDataType = {
    postData: PostType[]
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

export type ActionsType = AddPostType| AddMessageType | FollowType |
    UnfollowType | SetUsersType

type RootReducerType = typeof rootReducer
export type StateType = ReturnType<RootReducerType>
export type StoreType = typeof store

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer
})

export let store = createStore(rootReducer)


