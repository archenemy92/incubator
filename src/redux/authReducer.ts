import {ActionsType, AuthDataType, ThunkType} from "./store"
import {authApi} from "../api/api"
import {setIsFetching} from "./usersReducer"

export const SET_AUTH_DATA_AUTHORIZE = "SET_AUTH_DATA_AUTHORIZE"

const initState: AuthDataType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export type AuthMeType = {
    type: typeof SET_AUTH_DATA_AUTHORIZE
    data: AuthDataType
}
export const authMe = (data: AuthDataType): AuthMeType => {
    return {
        type: SET_AUTH_DATA_AUTHORIZE,
        data
    }
}

export const authReducer = (state = initState, action: ActionsType): AuthDataType => {
    switch (action.type) {
        case SET_AUTH_DATA_AUTHORIZE:
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
        const {id, login, email} = await authApi.me()
        dispatch(authMe({id, login, email, isAuth: false}))
        dispatch(setIsFetching(false))
    }