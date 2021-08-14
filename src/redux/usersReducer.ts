import {ActionsType, ThunkType} from "./store"
import {userAPI} from "../api/api"

const FOLLOW_USERS_PAGE = "FOLLOW_USERS_PAGE"
const UNFOLLOW_USERS_PAGE = "UNFOLLOW_USERS_PAGE"
const SET_USERS_USERS_PAGE = "SET_USERS_USERS_PAGE"
const SET_TOTAL_COUNT_USERS_PAGE = "SET_TOTAL_COUNT_USERS_PAGE"
const SET_CURRENT_PAGE_USERS_PAGE = "SET_CURRENT_PAGE_USERS_PAGE"
const SET_IS_FETCHING_USERS_PAGE = "SET_IS_FETCHING_USERS_PAGE"
const IS_FOLLOW_USERS_PAGE = "IS_FOLLOW_USERS_PAGE"

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
    isFollow: string[]
    totalCount: number
    currentPage: number
    pageSize: number
    isFetch: boolean
}

const initState: UsersDataType = {
    users: [],
    currentPage: 1,
    totalCount: 0,
    pageSize: 5,
    isFetch: false,
    isFollow: []
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
        case SET_IS_FETCHING_USERS_PAGE:
            return {
                ...state,
                isFetch: action.isFetching
            }
        case IS_FOLLOW_USERS_PAGE:
            return {
                ...state,
                isFollow: action.isFetching
                    ? [...state.isFollow, action.userID]
                    : state.isFollow.filter(id => id !== action.userID)
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
export type SetIsFetchingType = {
    type: typeof SET_IS_FETCHING_USERS_PAGE
    isFetching: boolean
}
export type SetIsFollowType = {
    type: typeof IS_FOLLOW_USERS_PAGE
    isFetching: boolean
    userID: string
}

export const followSuccess = (userID: string): FollowType => {
    return {
        type: FOLLOW_USERS_PAGE,
        userID
    }
}
export const unfollowSuccess = (userID: string): UnfollowType => {
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
export const setIsFetching = (isFetching: boolean): SetIsFetchingType => {
    return {
        type: SET_IS_FETCHING_USERS_PAGE,
        isFetching
    }
}
export const setIsFollow = (isFetching: boolean, userID: string): SetIsFollowType => {
    return {
        type: IS_FOLLOW_USERS_PAGE,
        userID,
        isFetching
    }
}

export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(setIsFetching(true))
        let response = await userAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(response.data.items))
        dispatch(setTotalCount(response.data.totalCount))
        dispatch(setIsFetching(false))
    }
}

export const follow = (userId: string): ThunkType => {
    return async (dispatch) => {
        dispatch(setIsFollow(true, userId))
        let response = await userAPI.follow(userId)
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(setIsFollow(false, userId))
    }
}

export const unfollow = (userId: string): ThunkType => {
    return async (dispatch) => {
        dispatch(setIsFollow(true, userId))
        let response = await userAPI.unfollow(userId)
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(setIsFollow(false, userId))
    }
}
