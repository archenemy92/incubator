import {ActionsType, AuthDataType, ThunkType} from "./store"
import {authApi} from "../api/api"
import {setIsFetching} from "./usersReducer"
import {stopSubmit} from "redux-form"


export const SET_AUTH_DATA_AUTHORIZE = "SET_AUTH_DATA_AUTHORIZE"

export type DataType = {
    id: string | null
    email: string | null
    login: string | null
}

const initState: AuthDataType = {
    data: {
        id: null,
        login: null,
        email: null
    },
    isAuth: false
}

export type AuthMeType = {
    type: typeof SET_AUTH_DATA_AUTHORIZE
    data: DataType
    auth: boolean
}
export const authMe = (data: DataType, auth: boolean): AuthMeType => {
    return {
        type: SET_AUTH_DATA_AUTHORIZE,
        data,
        auth
    }
}
export const authReducer = (state = initState, action: ActionsType): AuthDataType => {
    switch (action.type) {
        case SET_AUTH_DATA_AUTHORIZE:
            debugger
            return {
                ...state,
                data: {...action.data},
                isAuth: action.auth
            }
        default:
            return state
    }
}

export const getAuthData = (): ThunkType =>
    async (dispatch) => {
        dispatch(setIsFetching(true))
        const response = await authApi.me()
        let {id, login, email} = response.data
        if (response.resultCode === 0) {
            dispatch(authMe({id, login, email}, true))
            dispatch(setIsFetching(false))
        }

    }

export const login = (email: string, password: string, rememberMe: boolean): ThunkType =>
    async (dispatch) => {
        const response = await authApi.login(email, password, rememberMe)
        debugger
        if (response.data.resultCode === 0) {
            await dispatch(getAuthData())
        } else {
            let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
            // @ts-ignore
            dispatch(stopSubmit("login", {_error: errorMessage}))
        }
    }

export const logout = (): ThunkType =>
    async (dispatch) => {
        const response = await authApi.logout()
        if (response.data.resultCode === 0) {
            dispatch(authMe({id: null, login: null, email: null}, false))
        }
    }