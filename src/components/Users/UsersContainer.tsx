import {connect} from "react-redux"
import {Users} from "./Users"
import {ActionsType, StateType} from "../../redux/store"
import {follow, setCurrentPage, setTotalCount, setUsers, unfollow, UsersType} from "../../redux/usersReducer"
import React, {Dispatch} from "react"
import axios from "axios"

type UsersCPropsType = {
    users: UsersType[]
    totalCount: number
    currentPage: number
    pageSize: number
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (count: number) => void

}

export class UsersC extends React.Component<UsersCPropsType> {

    componentDidMount() {
        axios.get<{ items: UsersType[], totalCount: number }>(
            `https://social-network.samuraijs.com/api/1.0/users?
            page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChangeHandler = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get<{ items: UsersType[] }>(
            `https://social-network.samuraijs.com/api/1.0/users?
            page=${currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return (
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   onPageChangeHandler={this.onPageChangeHandler}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}/>
        )
    }

}


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

export const UsersContainer = connect<MSTPType, MDTPType, {}, StateType>(mapStateToProps, mapDispatchToProps)(UsersC)