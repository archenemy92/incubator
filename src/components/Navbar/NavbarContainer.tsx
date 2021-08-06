import {Navbar} from "./Navbar"
import {connect} from "react-redux"
import {SidebarDataType, StateType} from "../../redux/store"


type MSTPType = {
    item: SidebarDataType
}
type  MDTPType = {}

const mapStateToProps = (state: StateType): MSTPType => {
    return {
        item: state.sidebarPage
    }
}

export const NavbarContainer =
    connect<MSTPType, MDTPType, {}, StateType>(mapStateToProps, {})(Navbar)