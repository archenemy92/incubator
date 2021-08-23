import React, {ComponentType} from "react"
import {connect} from "react-redux"
import {StateType} from "../../redux/store"
import {Redirect} from "react-router-dom"

type MSTPType = {
    isAuth: boolean
}
type MDTPType = {}

const mapStateToProps = (state: StateType): MSTPType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withRedirect<T>(Component: ComponentType<T>) {
    let RedirectComponent = (props: MSTPType) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={"/login"}/>
        return <Component {...restProps as T}/>
    }

    let ConnectedRedirect = connect<MSTPType, MDTPType, {}, StateType>(mapStateToProps)(RedirectComponent)
    return ConnectedRedirect
}

