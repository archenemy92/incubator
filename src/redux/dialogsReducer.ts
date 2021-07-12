import {v1} from "uuid"
import {ActionsType, ava, DialogDataType} from "./store"

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

export const dialogReducer = (state: DialogDataType, action: ActionsType): DialogDataType => {
    switch (action.type) {
        case DIALOGS_ADD_MESSAGE:
            let newMessage = {
                body: action.body, id: v1(), img: ava
            }
            state.messages.push(newMessage)
            return state
        default:
            return state
    }
}