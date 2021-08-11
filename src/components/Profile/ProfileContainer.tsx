import React from "react"
import {Profile} from "./Profile"
import {connect} from "react-redux"
import {ProfileType, StateType} from "../../redux/store"
import {setProfile} from "../../redux/profileReducer"
import {setIsFetching} from "../../redux/usersReducer"
import {RouteComponentProps, withRouter} from "react-router-dom"
import {profileApi} from "../../api/api"

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
        this.props.setIsFetching(true)
        profileApi.setProfile(userId).then((response) => {
            this.props.setIsFetching(false)
            this.props.setProfile(response.data)
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

type MSTPType = {
    profile: ProfileType | null
}
type MDTPType = {
    setProfile: (profile: ProfileType) => void
    setIsFetching: (isFetching: boolean) => void
}

const mapStateToProps = (state: StateType): MSTPType => {
    return {
        profile: state.profilePage.profile
    }
}

const ProfileWithUrl = withRouter(ProfileC)

export const ProfileContainer =
    connect<MSTPType, MDTPType, {}, StateType>(mapStateToProps, {setProfile, setIsFetching})(ProfileWithUrl)