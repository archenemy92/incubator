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
import {userAPI} from "../../api/api"

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
            userAPI.getUsers(this.props.currentPage, this.props.pageSize).then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
                this.props.setIsFetching(false)
            })
    }

    onPageChangeHandler = (currentPage: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(currentPage)
        userAPI.getUsers(currentPage, this.props.pageSize).then((response) => {
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