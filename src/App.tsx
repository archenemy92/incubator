import React from "react"
import "./App.css"
import {Header} from "./components/Header/Header"
import {Navbar} from "./components/Navbar/Navbar"
import {Profile} from "./components/Profile/Profile"
import {Dialogs} from "./components/Dialogs/Dialogs"
import {Users} from "./components/Users/Users"
import {Friends} from "./components/Friends/Friends"
import {Music} from "./components/Music/Music"
import {Settings} from "./components/Settings/Settings"
import {Route} from "react-router-dom"
import {StateType} from "./redux/store"

export type AppPropsType = {
    state: StateType
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className={"appWrapper"}>
            <Header/>
            <Navbar item={props.state.sidebarPage}/>
            <div className={"appWrapperContent"}>
                <Route path={"/profile"} render={() => <Profile
                    postData={props.state.profilePage.postData}/>}/>
                <Route path={"/dialogs"} render={() => <Dialogs
                    dialogData={props.state.dialogsPage.dialogData}/>}/>
                <Route path={"/users"} render={() => <Users/>}/>
                <Route path={"/friends"} render={() => <Friends/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>
        </div>
    )
}

export default App
