import {Dispatch} from "react"
import {Navbar} from "./Navbar"
import {connect} from "react-redux"
import {ActionsType, SidebarDataType, StateType} from "../../redux/store"


type MSTPType = {
    item: SidebarDataType
}
type  MDTPType = {}

const mapStateToProps = (state: StateType): MSTPType => {
    return {
        item: state.sidebarPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): MDTPType => {
    return {}
}

export const NavbarContainer =
    connect<MSTPType, MDTPType, {}, StateType>(mapStateToProps, mapDispatchToProps)(Navbar)