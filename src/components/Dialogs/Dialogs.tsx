import React, {ChangeEvent, useState} from "react"
import style from "./dialogs.module.css"
import {FriendMessage} from "./Messages/FriendMessage"
import {MyMessage} from "./Messages/MyMessage"
import {DialogItemsType, MessagesType} from "../../redux/store"
import {DialogItems} from "./DialogItems/DialogItems"

type DialogsPropsType = {
    dialogData: DialogItemsType[]
    messages: MessagesType[]
    addMessage: (messageText: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const [messageBody, setMessageBody] = useState("")

    const addMessage = () => {
        props.addMessage(messageBody)
        setMessageBody("")
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageBody(e.currentTarget.value)
    }

    const dialogsElem = props.dialogData.map(d => <DialogItems key={d.id} name={d.name} id={d.id} img={d.img}/>)
    const message = props.messages.map(m => <MyMessage key={m.id} ava={m.img} text={m.body}/>)

    return (
        <div className={style.dialogs_content}>
            <div className={style.dialogs_items}>
                <div className={style.dialogs_names}>
                    {dialogsElem}
                </div>
                <div className={style.dialogs_messages}>
                    <div className={style.dialogs_friendMessage}>
                        <FriendMessage/>
                    </div>
                    <div className={style.dialogs_myMessage}>
                        {message}
                    </div>
                </div>
            </div>
            <div className={style.dialogs_actions}>
                <div className={style.dialogs_actions_textarea}>
                    <textarea className={style.dialogs_textarea}
                              value={messageBody}
                              onChange={onChangeHandler}/>
                </div>
                <div className={style.dialogs_actions_button}>
                    <button onClick={addMessage}>SEND</button>
                </div>
            </div>
        </div>
    )
}