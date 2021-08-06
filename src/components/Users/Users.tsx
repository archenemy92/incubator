import React from "react"
import {UsersType} from "../../redux/usersReducer"
import classes from "./Users.module.css"

let ava = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrrxsxZSpsfebkw8VLXe6R5j7mryT6PK7Pg&usqp=CAU"


type UsersPropsType = {
    users: UsersType[]
    currentPage: number
    totalCount: number
    pageSize: number
    onPageChangeHandler: (page: number) => void
    follow: (userID: string) => void
    unfollow: (userID: string) => void
}

export const Users:React.FC<UsersPropsType> = (props) => {

    let pagesCount = 15 //Math.ceil(this.props.totalCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return(
        <>
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
                    props.unfollow(user.id)
                }
                const follow = () => {
                    props.follow(user.id)
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