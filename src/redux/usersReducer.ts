import {ActionsType} from "./store"



const FOLLOW_USERS_PAGE = "FOLLOW_USERS_PAGE"
const UNFOLLOW_USERS_PAGE = "UNFOLLOW_USERS_PAGE"
const SET_USERS_USERS_PAGE = "SET_USERS_USERS_PAGE"

export type UsersType = {
    name: string
    id: string
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}

export type UsersDataType = {
    users: UsersType[]
}

const initState: UsersDataType = {
    users: []
}

export const usersReducer = (state = initState, action: ActionsType): UsersDataType => {
    switch (action.type) {
        case FOLLOW_USERS_PAGE:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u
                })
            }
        case UNFOLLOW_USERS_PAGE:
            return {
                ...state,
                users: state.users.map(u=> {
                    if (u.id === action.userID) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u
                })
            }
        case SET_USERS_USERS_PAGE:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export type FollowType = {
    type: typeof FOLLOW_USERS_PAGE
    userID: string
}
export type UnfollowType = {
    type: typeof UNFOLLOW_USERS_PAGE
    userID: string
}
export type SetUsersType = {
    type: typeof SET_USERS_USERS_PAGE
    users: UsersType[]
}

export const follow = (userID: string): FollowType => {
    return {
        type: FOLLOW_USERS_PAGE,
        userID
    }
}
export const unfollow = (userID: string): UnfollowType => {
    return {
        type: UNFOLLOW_USERS_PAGE,
        userID
    }
}
export const setUsers = (users: UsersType[]): SetUsersType => {
    return {
        type: SET_USERS_USERS_PAGE,
        users
    }
}