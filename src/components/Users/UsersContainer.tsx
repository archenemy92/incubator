import {connect} from "react-redux"
import {Users} from "./Users"
import {ActionsType, StateType} from "../../redux/store"
import {follow, setUsers, unfollow, UsersType} from "../../redux/usersReducer"
import {Dispatch} from "react"

type MDTPType = {
    follow: (userID: string)=> void
    unfollow: (userID: string) => void
    setUsers: (users: UsersType[]) => void
}

type MSTPType = {
    users: UsersType[]
}

const mapStateToProps = (state: StateType): MSTPType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): MDTPType => {
    return {
        follow:(userID: string) => {
            dispatch(follow(userID))
        },
        unfollow: (userID: string) => {
            dispatch(unfollow(userID))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsers(users))
        }
    }
}


export const UsersContainer = connect<MSTPType, MDTPType, {}, StateType>(mapStateToProps, mapDispatchToProps)(Users)