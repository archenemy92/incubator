import React, {ChangeEvent} from "react"
import styles from "./Profile.module.css"
import {ProfileType} from "../../redux/store"
import {Preloader} from "../Common/Preloader/Preloader"
import ava from "../../accets/avatar.png"

type AvaDescType = {
    profile: ProfileType | null
    updateStatus: (status: string) => void
    status: string
}

export const AvaDesc: React.FC<AvaDescType> = ({profile, updateStatus, status}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={styles.avaDesc}>
            <div>
                <img className={styles.ava}
                     src={profile.photos.large ? profile.photos.large : ava}
                     alt={"profileImage"}/>
                <Status updateStatus={updateStatus} status={status}/>
            </div>
            <div className={styles.desc}>
                <span>{profile.aboutMe}</span>
                <span>{profile.fullName}</span>
                <span>{profile.lookingForAJobDescription}</span>
            </div>
        </div>
    )
}

type StatusPropsType = {
    updateStatus: (status: string) => void
    status: string
}

type StateType = {
    editeMode: boolean
    value: string
}

class Status extends React.Component<StatusPropsType> {
    state: StateType = {
        editeMode: false,
        value: this.props.status

    }

    isEditeMode = () => {
        this.setState({
            editeMode: !this.state.editeMode
        })
        this.props.updateStatus(this.state.value)
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<StatusPropsType>) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                value: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editeMode
                    ? <div>
                        <span onDoubleClick={this.isEditeMode}>{this.state.value || "-----"}</span>
                    </div>
                    : <div>
                        <input
                            autoFocus
                            onBlur={this.isEditeMode}
                            value={this.state.value}
                            onChange={this.onChangeHandler}
                        />
                    </div>
                }
            </div>
        )
    }
}