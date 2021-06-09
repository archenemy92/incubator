import React from "react"
import style from "./MyMessage.module.css"

type MyMessageType = {
    ava: string
    text: string
}

export const MyMessage:React.FC<MyMessageType> = (props) => {
    return (
        <div className={style.myMessage}>
            <div className={style.myMessage_ava}>
                <img
                    alt={"name"}
                    src={props.ava}/>
            </div>
            <div className={style.myMessage_content}>
                <div className={style.myMessage_text}>
                    {props.text}
                </div>
                <div className={style.myMessage_infoAct}>
                    <div >{new Date().toLocaleString()}</div>
                    <div>
                        <button>del</button>
                    </div>
                </div>
            </div>

        </div>
    )
}