import React from "react"
import {Profile} from "./Profile"
import {connect} from "react-redux"
import {ProfileType, StateType} from "../../redux/store"
import {getProfile, getProfileStatus, updateProfileStatus} from "../../redux/profileReducer"
import {RouteComponentProps, withRouter} from "react-router-dom"
import {withRedirect} from "../../accets/hoc/withRedirect"
import {compose} from "redux"

type MSTPType = {
    profile: ProfileType | null
    status: string
}
type MDTPType = {
    getProfile: (userID: string) => void
    getProfileStatus: (userID: string) => void
    updateProfileStatus: (status: string) => void
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
            userId = "10911"
        }
        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)
    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        updateStatus={this.props.updateProfileStatus}/>
    }
}

const mapStateToProps = (state: StateType): MSTPType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export const ProfileContainer = compose<React.ComponentType>(
    connect<MSTPType, MDTPType, {}, StateType>(mapStateToProps, {
            getProfile, getProfileStatus, updateProfileStatus
        }
    ),
    withRouter,
    withRedirect
)(ProfileC)