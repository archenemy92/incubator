import React from "react"
import "./App.css"
import {Header} from "./components/Header/Header"
import {Navbar} from "./components/Navbar/Navbar"
import {Profile} from "./components/Profile/Profile"
import {Users} from "./components/Users/Users"
import {Friends} from "./components/Friends/Friends"
import {Music} from "./components/Music/Music"
import {Settings} from "./components/Settings/Settings"
import {Route} from "react-router-dom"
import {ActionsType, StoreType} from "./redux/store"
import {DialogsContainer} from "./components/Dialogs/DialogsContainer"

export type AppPropsType = {
    state: StoreType
    dispatch: (action: ActionsType) => void
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className={"appWrapper"}>
            <Header/>
            <Navbar item={props.state.sidebarPage}/>
            <div className={"appWrapperContent"}>
                <Route path={"/profile"} render={() => <Profile
                    postData={props.state.profilePage.postData}
                    dispatch={props.dispatch}

                />}/>
                <Route path={"/dialogs"} render={() => <DialogsContainer
                    dialogData={props.state.dialogsPage.dialogData}
                    messages={props.state.dialogsPage.messages}
                    dispatch={props.dispatch}
                />}/>
                <Route path={"/users"} render={() => <Users/>}/>
                <Route path={"/friends"} render={() => <Friends/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>
        </div>
    )
}

export default App
