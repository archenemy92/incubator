import {addMessage} from "../../redux/dialogsReducer"
import {Dialogs} from "./Dialogs"
import {connect} from "react-redux"
import {DialogItemsType, MessagesType, StateType} from "../../redux/store"
import {withRedirect} from "../../accets/hoc/withRedirect"
import {compose} from "redux"
import React from "react"

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
        messages: state.dialogsPage.messages,
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect<MSTPType, MDTPType, {}, StateType>(mapStateToProps, {addMessage}),
    withRedirect
)(Dialogs)


