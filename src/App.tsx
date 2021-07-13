import React from "react"
import "./App.css"
import {Header} from "./components/Header/Header"
import {Profile} from "./components/Profile/Profile"
import {Users} from "./components/Users/Users"
import {Friends} from "./components/Friends/Friends"
import {Music} from "./components/Music/Music"
import {Settings} from "./components/Settings/Settings"
import {Route} from "react-router-dom"
import {DialogsContainer} from "./components/Dialogs/DialogsContainer"
import {NavbarContainer} from "./components/Navbar/NavbarContainer"


export type AppPropsType = {}

const App: React.FC<AppPropsType> = () => {
    return (
        <div className={"appWrapper"}>
            <Header/>
            <NavbarContainer/>
            <div className={"appWrapperContent"}>
                <Route path={"/profile"} render={() => <Profile/>}/>
                <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                <Route path={"/users"} render={() => <Users/>}/>
                <Route path={"/friends"} render={() => <Friends/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>
        </div>
    )
}

export default App
