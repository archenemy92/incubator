import {ActionsType, ThunkType} from "./store"
import {getAuthData} from "./authReducer"

const initState = {
    initialize: false
}

export type InitializedType = ReturnType<typeof initializedSuccess>

export const initializedSuccess = () => {
    return {
        type: "APP_INITIALIZED_SUCCESS"
    } as const
}
export const appReducer = (state = initState, action: ActionsType): typeof initState => {
    switch (action.type) {
        case "APP_INITIALIZED_SUCCESS":
            debugger
            return {
                ...state,
                initialize: true
            }
        default:
            return state
    }
}

export const initializeApp = (): ThunkType =>
    async (dispatch) => {
        await dispatch(getAuthData())
        dispatch(initializedSuccess())
    }

