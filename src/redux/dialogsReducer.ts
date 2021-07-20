import {v1} from "uuid"
import {ActionsType, DialogDataType} from "./store"

export type AddMessageType = {
    type: typeof DIALOGS_ADD_MESSAGE
    body: string
}
export const DIALOGS_ADD_MESSAGE = "DIALOGS_ADD_MESSAGE"

export const addMessageAC = (body: string): AddMessageType => {
    return {
        type: DIALOGS_ADD_MESSAGE,
        body
    }
}
let ava = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrrxsxZSpsfebkw8VLXe6R5j7mryT6PK7Pg&usqp=CAU"

const initState: DialogDataType = {
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
    messages: []
}

export const dialogReducer = (state = initState, action: ActionsType): DialogDataType => {
    switch (action.type) {
        case DIALOGS_ADD_MESSAGE:
            let newMessage = {
                body: action.body, id: v1(), img: ava
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state
    }
}