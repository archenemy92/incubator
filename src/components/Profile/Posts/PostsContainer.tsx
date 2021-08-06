import {Posts} from "./Posts"
import {addPost} from "../../../redux/profileReducer"
import {connect} from "react-redux"
import {PostType, StateType} from "../../../redux/store"

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

export const PostsContainer =
    connect<MSTPType, MDTPType, {}, StateType>(mapStateToProps, {addPost})(Posts)