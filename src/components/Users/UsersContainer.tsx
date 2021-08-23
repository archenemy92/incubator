import {connect} from "react-redux"
import {Users} from "./Users"
import {StateType} from "../../redux/store"
import {
    follow,
    getUsers,
    setCurrentPage,
    setIsFetching, setIsFollow,
    setTotalCount,
    unfollow,
    UsersType
} from "../../redux/usersReducer"
import React from "react"
import {Redirect} from "react-router-dom"

type UsersCPropsType = MSTPType & MDTPType

export class UsersC extends React.Component<UsersCPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChangeHandler = (currentPage: number) => {
        this.props.getUsers(currentPage, this.props.pageSize)
        this.props.setCurrentPage(currentPage)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"login"}/>
        return (
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   onPageChangeHandler={this.onPageChangeHandler}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}
                   isFollow={this.props.isFollow}
                   setIsFollow={this.props.setIsFollow}
            />
        )
    }
}

type MDTPType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    getUsers: (currentPage: number, pageSize: number) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (count: number) => void
    setIsFetching: (isFetch: boolean) => void
    setIsFollow: (isFetching: boolean, userID: string) => void
}

type MSTPType = {
    users: UsersType[]
    isFollow: string[]
    totalCount: number
    currentPage: number
    pageSize: number
    isFetching: boolean
    isAuth: boolean
}

const mapStateToProps = (state: StateType): MSTPType => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetch,
        isFollow: state.usersPage.isFollow,
        isAuth: state.auth.isAuth
    }
}

export const UsersContainer =
    connect<MSTPType, MDTPType, {}, StateType>(mapStateToProps, {
        getUsers, setIsFetching,
        setTotalCount, setCurrentPage,
        unfollow, follow, setIsFollow
    })(UsersC)