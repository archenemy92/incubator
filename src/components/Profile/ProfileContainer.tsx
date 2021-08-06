import React from "react"
import {Profile} from "./Profile"
import {connect} from "react-redux"
import {ProfileType, StateType} from "../../redux/store"
import {setProfile} from "../../redux/profileReducer"
import axios from "axios"
import {setIsFetching} from "../../redux/usersReducer"

type ProfileCType = {
    profile: ProfileType | null
    setProfile: (profile: ProfileType) => void
    setIsFetching: (isFetching: boolean) =>void
}

class ProfileC extends React.Component<ProfileCType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get<ProfileType>(
            `https://social-network.samuraijs.com/api/1.0/profile/2`
        )
            .then((response) => {
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
    setIsFetching: (isFetching: boolean) =>void
}

const mapStateToProps = (state: StateType): MSTPType => {
    return {
        profile: state.profilePage.profile
    }
}

export const ProfileContainer =
    connect<MSTPType, MDTPType, {}, StateType>(mapStateToProps, {setProfile, setIsFetching})(ProfileC)