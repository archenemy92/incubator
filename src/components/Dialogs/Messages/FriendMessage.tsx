import React from "react"
import style from "./FriendMessage.module.css"


export const FriendMessage = () => {
    return (
        <div className={style.friendMessage}>
            <div className={style.friendMessage_ava}>
                <img
                    alt={"name"}
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrrxsxZSpsfebkw8VLXe6R5j7mryT6PK7Pg&usqp=CAU"}/>
            </div>
            <div className={style.friendMessage_content}>
                <div className={style.friendMessage_text}>
                    FR  text text text text text text text text
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
                <div className={style.friendMessage_infoAct}>
                    <div>{new Date().toLocaleString()}</div>
                    <button>del</button>
                </div>
            </div>

        </div>
    )
}