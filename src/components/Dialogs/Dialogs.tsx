import React from "react"
import style from "./dialogs.module.css"
import {FriendMessage} from "./Messages/FriendMessage"
import {MyMessage} from "./Messages/MyMessage"
import {DialogItemsType} from "../../redux/store"
import {DialogItems} from "./DialogItems/DialogItems"

type DialogsPropsType = {
    dialogData: DialogItemsType[]
}
export const Dialogs:React.FC<DialogsPropsType> = (props) => {

    const dialogsElem = props.dialogData.map(d=><DialogItems key={d.id} name={d.name} id={d.id} img={d.img}/>)

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
                        <MyMessage/>
                    </div>
                </div>
            </div>
            <div className={style.dialogs_actions}>
                <div className={style.dialogs_actions_textarea}>
                    <textarea className={style.dialogs_textarea}/>
                </div>
                <div className={style.dialogs_actions_button}>
                    <button>SEND</button>
                </div>
            </div>
        </div>
    )
}