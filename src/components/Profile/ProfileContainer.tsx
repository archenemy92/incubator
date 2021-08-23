import React from "react"
import {Profile} from "./Profile"
import {connect} from "react-redux"
import {ProfileType, StateType} from "../../redux/store"
import {getProfile} from "../../redux/profileReducer"
import {RouteComponentProps, withRouter} from "react-router-dom"
import {withRedirect} from "../../accets/hoc/withRedirect"
import {compose} from "redux"

type MSTPType = {
    profile: ProfileType | null
}
type MDTPType = {
    getProfile: (userID: string) => void
}

type Match = {
    userId: string
}

/*interface ProfileClassType extends RouteComponentProps<Match> {
    profile: ProfileType | null
    setProfile: (profile: ProfileType) => void
    setIsFetching: (isFetching: boolean) => void
}*/

type OwnProps = MDTPType & MSTPType
type PropsType = RouteComponentProps<Match> & OwnProps

class ProfileC extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getProfile(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: StateType): MSTPType => {
    return {
        profile: state.profilePage.profile,
    }
}

export const ProfileContainer = compose<React.ComponentType>(
    connect<MSTPType, MDTPType, {}, StateType>(mapStateToProps, {getProfile}),
    withRouter,
    withRedirect
)(ProfileC)