import React from "react"
import preloader from "../../../accets/Rhombus.gif"

const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "40vh 0 0 0"
}

export const Preloader: React.FC = () => {
    return (
        <div style={style}>
            <img src={preloader} alt={"preloader"} style={{width: "20%"}}/>
        </div>
    )
}