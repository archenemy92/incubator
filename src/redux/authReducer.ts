import {ActionsType, AuthDataType, ThunkType} from "./store"
import {authApi} from "../api/api"
import {setIsFetching} from "./usersReducer"

export const SET_AUTH_DATA_AUTHORIZE = "SET_AUTH_DATA_AUTHORIZE"

export type DataType = {
    id: number | null
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
}
export const authMe = (data: DataType): AuthMeType => {
    return {
        type: SET_AUTH_DATA_AUTHORIZE,
        data
    }
}
export const authReducer = (state = initState, action: ActionsType): AuthDataType => {
    switch (action.type) {
        case SET_AUTH_DATA_AUTHORIZE:
            debugger
            return {
                ...state,
                ...action.data,
                isAuth: true
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
            dispatch(authMe({id, login, email}))
            dispatch(setIsFetching(false))
        }

    }