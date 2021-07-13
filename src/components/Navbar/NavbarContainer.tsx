import React from "react"
import {Navbar} from "./Navbar"
import {Context} from "../../Context"

type NavbarContainerPropsType = {}

export const NavbarContainer: React.FC<NavbarContainerPropsType> = () => {
        return (
            <Context.Consumer>
                {
                    (store) => {
                        let state = store.getState()
                        return (
                            <Navbar item={state.sidebarPage}/>
                        )
                    }
                }
            </Context.Consumer>

        )
    }