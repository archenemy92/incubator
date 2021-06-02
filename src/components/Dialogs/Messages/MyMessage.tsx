import React from "react"
import style from "./MyMessage.module.css"

export const MyMessage = () => {
    return (
        <div className={style.myMessage}>
            <div className={style.myMessage_ava}>
                <img
                    alt={"name"}
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrrxsxZSpsfebkw8VLXe6R5j7mryT6PK7Pg&usqp=CAU"}/>
            </div>
            <div className={style.myMessage_content}>
                <div className={style.myMessage_text}>
                    MY text text text text text text text text
                    text text text text text text text text
                    text text text text text text text text
                    text text text text text text text text
                    text text text text text text text text
                    text text text text text text text text
                    text text text text text text text text
                    text text text text text text text text
                    text text text text text text text text
                    text text text text text text text text
                    text text text text text text text text
                    text text text text text text text text
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