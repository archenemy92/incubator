import React from "react"
import {UsersType} from "../../redux/usersReducer"
import classes from "./Users.module.css"
import {Preloader} from "../Common/Preloader/Preloader"
import { NavLink } from "react-router-dom"
import axios from "axios"

let ava = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrrxsxZSpsfebkw8VLXe6R5j7mryT6PK7Pg&usqp=CAU"


type UsersPropsType = {
    users: UsersType[]
    currentPage: number
    totalCount: number
    pageSize: number
    onPageChangeHandler: (page: number) => void
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    isFetching: boolean
}

export const Users: React.FC<UsersPropsType> = (props) => {

    let pagesCount = 15 // Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    if (props.isFetching){
        return <Preloader/>
    }
    return  <div>
        <div>
            {pages.map((p, i) => <span
                key={i}
                className={props.currentPage === p
                    ? classes.paginationSelected
                    : classes.pagination}
                onClick={() => props.onPageChangeHandler(p)}>
                        {p}
                    </span>)}
        </div>
        {props.users.map(user => {

            const unfollow = () => {
                axios.delete<{data: {}, resultCode: number, messages: string[]}>(
                    `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "ef2db174-b518-48a0-8476-91d72e746177"
                        }
                    })
                    .then((response) => {
                        if (response.data.resultCode === 0) {
                            props.unfollow(user.id)
                        }
                    })
            }
            const follow = () => {
                axios.post<{data: {}, resultCode: number, messages: string[]}>(
                    `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{}, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "ef2db174-b518-48a0-8476-91d72e746177"
                        }
                    })
                    .then((response) => {
                        if (response.data.resultCode === 0) {
                            props.follow(user.id)
                        }
                    })

            }

            return <div key={user.id} className={classes.user_container}>

                <div className={classes.user_content}>
                    <div className={classes.user_ava}>
                        <NavLink to={"/profile/" + user.id}>
                            <img src={user.photos.small ? user.photos.small : ava} alt={"avatar must be here"}/>
                        </NavLink>

                    </div>
                    <div className={classes.user_name}>
                        {user.name}
                    </div>
                    <div className={classes.user_descriptions}>
                        descr
                    </div>
                </div>
                {
                    !user.followed
                        ? <button onClick={follow}>follow</button>
                        : <button onClick={unfollow}>unfollow</button>
                }
            </div>
        })
        }
    </div>
}