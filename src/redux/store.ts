import {v1} from "uuid"
import {rerenderTree} from "../rerender"

let ava = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrrxsxZSpsfebkw8VLXe6R5j7mryT6PK7Pg&usqp=CAU"


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

export type StateType = {
    profilePage: PostDataType
    dialogsPage: DialogDataType
    sidebarPage: SidebarDataType
}
/*
export type StoreType = {
    state: StateType
    addPost: (message: string) => void
    rerender: () => void
}*/


export let state: StateType = {
    profilePage: {
        postData: [
            {message: "Hello", id: v1(), like: 0, dislike: 0, img: ava},
            {message: "Hello my friend", id: v1(), like: 0, dislike: 0, img: ava},
            {message: "Hello dude", id: v1(), like: 0, dislike: 0, img: ava},
            {message: "Hello man", id: v1(), like: 0, dislike: 0, img: ava}
        ]
    },
    dialogsPage: {
        dialogData: [
            {name: "LENKA", id: v1(), img: ava},
            {name: "YURA", id: v1(), img: ava},
            {name: "NIKITA", id: v1(), img: ava},
            {name: "MARGO", id: v1(), img: ava},
            {name: "ANASTASIYA", id: v1(), img: ava},
            {name: "OXANA", id: v1(), img: ava},
            {name: "VOLODYMYR", id: v1(), img: ava},
            {name: "KARINA", id: v1(), img: ava}
        ],
        messages: [

        ]

    },
    sidebarPage: {
        sidebarData: [
            {id: v1(), name: "LENKA", img: ava, value: "hey"},
            {id: v1(), name: "MARGO", img: ava, value: "hey"},
            {id: v1(), name: "NIKITA", img: ava, value: "hey"}
        ]
    }
}
export const addPost = (message:string) => {
    let newPost = {
        message, id: v1(), like: 0, dislike: 0, img: ava
    }
    state.profilePage.postData.push(newPost)
    rerenderTree(state)
}

export const addMessage=(body: string) => {
    let newMessage = {
        body, id: v1(), img: ava
    }
    state.dialogsPage.messages.push(newMessage)
    rerenderTree(state)
}
