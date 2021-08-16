import axios from "axios"
import {ProfileType} from "../redux/store"
import {UsersType} from "../redux/usersReducer"

let instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "ef2db174-b518-48a0-8476-91d72e746177"
    }
})

type GetUsersResponseType = {
    items: UsersType[]
    totalCount: number
    error: null | string
}

type FollowUnfollowResponseType = {
    data: {}
    resultCode: number
    messages: string[]
}

type authResponseType = {
    data: { id: number, login: string, email: string }
    resultCode: number
    messages: string[]
}

export let userAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow(userId: string) {
        return instance.post<FollowUnfollowResponseType>(`follow/${userId}`, {})
    },
    unfollow(userId: string) {
        return instance.delete<FollowUnfollowResponseType>(`follow/${userId}`)
    }
}

export let profileApi = {
    getProfile(userId: string) {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
}

export let authApi = {
    me() {
        return instance.get<authResponseType>(`auth/me`)
            .then(response => response.data.data)
    }
}