import React from "react"
import {StoreType} from "./redux/store"


export const Context = React.createContext({} as StoreType )

type ProviderPropsType = {
    store: StoreType
}
export const Provider:  React.FC<ProviderPropsType> = (props) => {
    return (
        <Context.Provider value={props.store} >
            {props.children}
        </Context.Provider>
    )
}