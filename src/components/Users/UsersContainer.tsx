import {connect} from "react-redux"
import {Users} from "./Users"
import {ActionsType, StateType} from "../../redux/store"
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalCount,
    setUsers,
    unfollow,
    UsersType
} from "../../redux/usersReducer"
import React, {Dispatch} from "react"
import axios from "axios"

type UsersCPropsType = {
    users: UsersType[]
    totalCount: number
    currentPage: number
    pageSize: number
    isFetching: boolean
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (count: number) => void
    setIsFetching: (isFetch: boolean) => void
}

export class UsersC extends React.Component<UsersCPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get<{ items: UsersType[], totalCount: number }>(
            `https://social-network.samuraijs.com/api/1.0/users?
            page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
            .then((response) => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChangeHandler = (currentPage: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(currentPage)
        axios.get<{ items: UsersType[] }>(
            `https://social-network.samuraijs.com/api/1.0/users?
            page=${currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setIsFetching(false)
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
                   unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}/>
        )
    }

}


type MDTPType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (count: number) => void
    setIsFetching: (isFetch: boolean) => void
}

type MSTPType = {
    users: UsersType[]
    totalCount: number
    currentPage: number
    pageSize: number
    isFetching: boolean
}

const mapStateToProps = (state: StateType): MSTPType => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetch
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): MDTPType => {
    return {
        follow: (userID) => {
            dispatch(follow(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollow(userID))
        },
        setUsers: (users) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPage(currentPage))
        },
        setTotalCount: (count) => {
            dispatch(setTotalCount(count))
        },
        setIsFetching: (isFetch) => {
            dispatch(setIsFetching(isFetch))
        }
    }
}

export const UsersContainer = connect<MSTPType, MDTPType, {}, StateType>(mapStateToProps, mapDispatchToProps)(UsersC)