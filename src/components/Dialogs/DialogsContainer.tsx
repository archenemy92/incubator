import {Dispatch} from "react"
import {addMessageAC} from "../../redux/dialogsReducer"
import {Dialogs} from "./Dialogs"
import {connect} from "react-redux"
import {ActionsType, DialogItemsType, MessagesType, StateType} from "../../redux/store"

type MSTPType = {
    dialogData: DialogItemsType[]
    messages: MessagesType[]
}

type MDTPType = {
    addMessage: (messageText: string) => void
}

const mapStateToProps = (state: StateType): MSTPType => {
    return {
        dialogData: state.dialogsPage.dialogData,
        messages: state.dialogsPage.messages
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): MDTPType => {
    return {
        addMessage: (messageText: string) => {
            dispatch(addMessageAC(messageText))
        }
    }
}

export const DialogsContainer =
    connect<MSTPType, MDTPType, {}, StateType>(mapStateToProps, mapDispatchToProps)(Dialogs)