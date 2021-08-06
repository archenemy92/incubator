import React from "react"
import {UsersType} from "../../redux/usersReducer"
import classes from "./Users.module.css"
import axios from "axios"

let ava = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrrxsxZSpsfebkw8VLXe6R5j7mryT6PK7Pg&usqp=CAU"

type UsersPropsType = {
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

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get<{ items: UsersType[], totalCount: number }>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChangeHandler = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get<{ items: UsersType[] }>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        let pagesCount = 15 //Math.ceil(this.props.totalCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <>
                <div>
                    {pages.map((p, i) => <span
                        key={i}
                        className={this.props.currentPage === p
                            ? classes.paginationSelected
                            : classes.pagination}
                        onClick={() => this.onPageChangeHandler(p)}>
                        {p}
                    </span>)}
                </div>
                {this.props.users.map(user => {

                    const unfollow = () => {
                        this.props.unfollow(user.id)
                    }
                    const follow = () => {
                        this.props.follow(user.id)
                    }

                    return <div key={user.id} className={classes.user_container}>

                        <div className={classes.user_content}>
                            <div className={classes.user_ava}>
                                <img src={user.photos.small ? user.photos.small : ava} alt={"avatar must be here"}/>
                            </div>
                            <div className={classes.user_name}>
                                {user.name}
                            </div>
                            <div className={classes.user_descriptions}>
                                descr
                            </div>
                        </div>
                        {
                            user.followed
                                ? <button onClick={unfollow}>follow</button>
                                : <button onClick={follow}>unfollow</button>
                        }
                    </div>
                })
                }
            </>
        )
    }


}