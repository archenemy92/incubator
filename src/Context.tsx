import React from "react"
import {store} from "./redux/store"

export const Context = React.createContext(store)

export const Provider = (props: any) => {
    return (
        <Context.Provider value={store}>
            {props.children}
        </Context.Provider>
    )
}