import React from "react"
import {UsersType} from "../../redux/usersReducer"
import classes from "./Users.module.css"
import axios from "axios"

let ava = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrrxsxZSpsfebkw8VLXe6R5j7mryT6PK7Pg&usqp=CAU"

type UsersPropsType = {
    users: UsersType[]
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UsersType[]) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get<{items: UsersType[]}>("https://social-network.samuraijs.com/api/1.0/users")
                .then((response)=>props.setUsers(response.data.items))
        }
    }

    return (
        <>
            <button onClick={getUsers}>getUsers</button>
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