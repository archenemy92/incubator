import React, {useEffect} from "react"
import "./App.css"
import {Friends} from "./components/Friends/Friends"
import {Music} from "./components/Music/Music"
import {Settings} from "./components/Settings/Settings"
import {Login} from "./components/Login/Login"
import {Route, withRouter} from "react-router-dom"
import {DialogsContainer} from "./components/Dialogs/DialogsContainer"
import {NavbarContainer} from "./components/Navbar/NavbarContainer"
import {UsersContainer} from "./components/Users/UsersContainer"
import {ProfileContainer} from "./components/Profile/ProfileContainer"
import {HeaderContainer} from "./components/Header/HeaderContainer"
import {compose} from "redux"
import {useDispatch, useSelector} from "react-redux"
import {StateType} from "./redux/store"
import {initializeApp} from "./redux/appReducer"
import {Preloader} from "./components/Common/Preloader/Preloader"


const App: React.FC = () => {

    const initialize = useSelector<StateType, boolean>(state => state.app.initialize)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    if (!initialize) {
        return <Preloader/>
    }

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
                <Route path={"/login"} render={() => <Login/>}/>
            </div>
        </div>
    )
}

export default compose(withRouter)(App)
