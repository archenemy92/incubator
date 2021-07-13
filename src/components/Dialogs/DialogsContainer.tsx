import React, {ChangeEvent, useState} from "react"
import {addMessageAC} from "../../redux/dialogsReducer"
import {Dialogs} from "./Dialogs"
import {Context} from "../../Context"

type DialogsContainerPropsType = {
}

export const DialogsContainer: React.FC<DialogsContainerPropsType> = () => {
    const [messageBody, setMessageBody] = useState("")

    return (
        <Context.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
                        setMessageBody(e.currentTarget.value)
                    }

                    const addMessage = (messageText: string) => {
                        store.dispatch(addMessageAC(messageText))
                        setMessageBody("")
                    }
                    return (
                        <Dialogs dialogData={state.dialogsPage.dialogData}
                                 messages={state.dialogsPage.messages}
                                 addMessage={addMessage}
                                 messageText={messageBody}
                                 onChangeMessage={onChangeMessage}
                        />
                    )
                }
            }
        </Context.Consumer>

    )
}