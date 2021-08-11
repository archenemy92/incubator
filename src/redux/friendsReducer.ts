import {UsersType} from "./usersReducer"
import {ActionsType} from "./store"

export const ADD_FRIEND_FRIENDS_PAGE = "ADD_FRIEND_FRIENDS_PAGE"
export const DELETE_FRIEND_FRIENDS_PAGE = "DELETE_FRIEND_FRIENDS_PAGE"


export type AddFriendType = {
    type: typeof ADD_FRIEND_FRIENDS_PAGE
    users: UsersType[]
}

export type DeleteFriendType = {
    type: typeof DELETE_FRIEND_FRIENDS_PAGE
    users: UsersType[]
}

export const addFriend = (users: UsersType[]): AddFriendType => {
    return {
        type: ADD_FRIEND_FRIENDS_PAGE,
        users
    }
}
export const deleteFriend = (users: UsersType[]): AddFriendType => {
    return {
        type: ADD_FRIEND_FRIENDS_PAGE,
        users
    }
}

type friendsPageType = {
    friends: UsersType[]
}

const initState: friendsPageType = {
    friends: []
}

export const friendReducer = (state=initState , action: ActionsType): friendsPageType => {
    switch (action.type) {
        case ADD_FRIEND_FRIENDS_PAGE:
            return {
                ...state
            }
        case DELETE_FRIEND_FRIENDS_PAGE:
            return {
                ...state
            }
        default:
            return state
    }
}