import {connect} from "react-redux"
import {Users} from "./Users"
import {StateType} from "../../redux/store"
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalCount,
    setUsers,
    unfollow,
    UsersType
} from "../../redux/usersReducer"
import React from "react"
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
        axios.get<{ items: UsersType[], totalCount: number, error: null | string }>(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "ef2db174-b518-48a0-8476-91d72e746177"
                }
            })
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
                this.props.setIsFetching(false)
            })
    }

    onPageChangeHandler = (currentPage: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(currentPage)
        axios.get<{ items: UsersType[], totalCount: number, error: null | string }>(
            `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "ef2db174-b518-48a0-8476-91d72e746177"
                }
            })
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setIsFetching(false)
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

export const UsersContainer =
    connect<MSTPType, MDTPType, {}, StateType>(mapStateToProps, {
        setUsers, setIsFetching,
        setTotalCount, setCurrentPage,
        unfollow, follow
    })(UsersC)