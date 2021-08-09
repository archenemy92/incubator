import React from "react"
import "./App.css"
import {Friends} from "./components/Friends/Friends"
import {Music} from "./components/Music/Music"
import {Settings} from "./components/Settings/Settings"
import {Route} from "react-router-dom"
import {DialogsContainer} from "./components/Dialogs/DialogsContainer"
import {NavbarContainer} from "./components/Navbar/NavbarContainer"
import {UsersContainer} from "./components/Users/UsersContainer"
import {ProfileContainer} from "./components/Profile/ProfileContainer"
import {HeaderContainer} from "./components/Header/HeaderContainer"

const App: React.FC = () => {
    return (
        <div className={"appWrapper"}>
            <HeaderContainer/>
            <NavbarContainer/>
            <div className={"appWrapperContent"}>
                <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                <Route path={"/users"} render={() => <UsersContainer/>}/>
                <Route path={"/friends"} render={() => <Friends/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>
        </div>
    )
}

export default App
