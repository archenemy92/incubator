import {addMessage} from "../../redux/dialogsReducer"
import {Dialogs} from "./Dialogs"
import {connect} from "react-redux"
import {DialogItemsType, MessagesType, StateType} from "../../redux/store"

type MSTPType = {
    dialogData: DialogItemsType[]
    messages: MessagesType[]
    isAuth: boolean
}

type MDTPType = {
    addMessage: (messageText: string) => void
}

const mapStateToProps = (state: StateType): MSTPType => {
    return {
        dialogData: state.dialogsPage.dialogData,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth
    }
}

export const DialogsContainer =
    connect<MSTPType, MDTPType, {}, StateType>(mapStateToProps, {addMessage})(Dialogs)