import React, {ChangeEvent, useState} from "react"
import {ActionsType, DialogItemsType, MessagesType} from "../../redux/store"
import {addMessageAC} from "../../redux/dialogsReducer"
import {Dialogs} from "./Dialogs"

type DialogsContainerPropsType = {
    dialogData: DialogItemsType[]
    messages: MessagesType[]
    dispatch: (action: ActionsType) => void
}

export const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
    const [messageBody, setMessageBody] = useState("")


    const addMessage = (messageText: string) => {
        props.dispatch(addMessageAC(messageText))
        setMessageBody("")
    }

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageBody(e.currentTarget.value)
    }

    return (
        <Dialogs dialogData={props.dialogData}
                 messages={props.messages}
                 addMessage={addMessage}
                 messageText={messageBody}
                 onChangeMessage={onChangeMessage}
        />
    )
}