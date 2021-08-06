import {connect} from "react-redux"
import {Users} from "./Users"
import {ActionsType, StateType} from "../../redux/store"
import {follow, setCurrentPage, setTotalCount, setUsers, unfollow, UsersType} from "../../redux/usersReducer"
import {Dispatch} from "react"

type MDTPType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (count: number) => void
}

type MSTPType = {
    users: UsersType[]
    totalCount: number
    currentPage: number
    pageSize: number
}

const mapStateToProps = (state: StateType): MSTPType => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): MDTPType => {
    return {
        follow: (userID: string) => {
            dispatch(follow(userID))
        },
        unfollow: (userID: string) => {
            dispatch(unfollow(userID))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPage(currentPage))
        },
        setTotalCount: (count: number) => {
            dispatch(setTotalCount(count))
        }
    }
}


export const UsersContainer = connect<MSTPType, MDTPType, {}, StateType>(mapStateToProps, mapDispatchToProps)(Users)