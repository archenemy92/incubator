import React from "react"
import styles from "./Profile.module.css"

export const AvaDesc = () => {
    return (
        <div className={styles.avaDesc}>
            <div>
                <img className={styles.ava}
                     src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrrxsxZSpsfebkw8VLXe6R5j7mryT6PK7Pg&usqp=CAU"}
                     alt={"name"}/>
            </div>
            <div className={styles.desc}>
                desc
            </div>
        </div>
    )
}
