import {ActionsType} from "./store"


const FOLLOW_USERS_PAGE = "FOLLOW_USERS_PAGE"
const UNFOLLOW_USERS_PAGE = "UNFOLLOW_USERS_PAGE"
const SET_USERS_USERS_PAGE = "SET_USERS_USERS_PAGE"
const SET_TOTAL_COUNT_USERS_PAGE = "SET_TOTAL_COUNT_USERS_PAGE"
const SET_CURRENT_PAGE_USERS_PAGE = "SET_CURRENT_PAGE_USERS_PAGE"
//const SET_USERS_USERS_PAGE = "SET_USERS_USERS_PAGE"

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
    totalCount: number
    currentPage: number
    pageSize: number
}

const initState: UsersDataType = {
    users: [],
    currentPage: 1,
    totalCount: 0,
    pageSize: 5
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
                users: state.users.map(u => {
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
                users: [...action.users]
            }
        case SET_TOTAL_COUNT_USERS_PAGE:
            return {
                ...state,
                totalCount: action.count
            }
        case SET_CURRENT_PAGE_USERS_PAGE:
            return {
                ...state,
               currentPage: action.currentPage
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
export type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE_USERS_PAGE
    currentPage: number
}
export type SetTotalCountType = {
    type: typeof SET_TOTAL_COUNT_USERS_PAGE
    count: number
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
export const setCurrentPage = (currentPage: number): SetCurrentPageType => {
    return {
        type: SET_CURRENT_PAGE_USERS_PAGE,
        currentPage
    }
}
export const setTotalCount = (count: number): SetTotalCountType => {
    return {
        type: SET_TOTAL_COUNT_USERS_PAGE,
        count
    }
}