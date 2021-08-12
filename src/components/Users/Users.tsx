import React from "react"
import {UsersType} from "../../redux/usersReducer"
import classes from "./Users.module.css"
import {Preloader} from "../Common/Preloader/Preloader"
import {User} from "./User"
import {userAPI} from "../../api/api"

type UsersPropsType = {
    users: UsersType[]
    isFollow: string[]
    currentPage: number
    totalCount: number
    pageSize: number
    onPageChangeHandler: (page: number) => void
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setIsFollow: (isFetching: boolean, userID: string) => void
    isFetching: boolean
}

export const Users: React.FC<UsersPropsType> = (props) => {

    let pagesCount = 15 // Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    if (props.isFetching) {
        return <Preloader/>
    }
    return <div>
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
                props.setIsFollow(true, user.id)
                userAPI.unfollow(user.id).then((response) => {
                    if (response.data.resultCode === 0) {
                        props.unfollow(user.id)
                    }
                    props.setIsFollow(false, user.id)
                })
            }
            const follow = () => {
                props.setIsFollow(true, user.id)
                userAPI.follow(user.id).then((response) => {
                    if (response.data.resultCode === 0) {
                        props.follow(user.id)
                    }
                    props.setIsFollow(false, user.id)
                })
            }

            return <div key={user.id} className={classes.user_container}>
                <User id={user.id} photo={user.photos.small} name={user.name}/>
                {
                    !user.followed
                        ? <button disabled={props.isFollow.some(id => id === user.id)}
                                  onClick={follow}>follow</button>
                        : <button disabled={props.isFollow.some(id => id === user.id)}
                                  onClick={unfollow}>unfollow</button>
                }
            </div>
        })
        }
    </div>
}