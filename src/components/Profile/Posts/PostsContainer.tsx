import {Dispatch} from "react"
import {Posts} from "./Posts"
import {addPostAC} from "../../../redux/profileReducer"
import {connect} from "react-redux"
import {ActionsType, PostType, StateType} from "../../../redux/store"

type MSTPType = {
    postData: PostType[]
}

type MDTPType = {
    addPost: (postText: string) => void
}

const mapStateToProps = (state: StateType): MSTPType => {
    return {
        postData: state.profilePage.postData
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): MDTPType => {
    return {
        addPost: (postText: string) => {
            dispatch(addPostAC(postText))
        }
    }
}

export const PostsContainer =
    connect<MSTPType, MDTPType, {}, StateType>(mapStateToProps, mapDispatchToProps)(Posts)