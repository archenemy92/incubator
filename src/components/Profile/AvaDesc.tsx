import React, {ChangeEvent} from "react"
import styles from "./Profile.module.css"
import {ProfileType} from "../../redux/store"
import {Preloader} from "../Common/Preloader/Preloader"
import ava from "../../accets/avatar.png"

type AvaDescType = {
    profile: ProfileType | null
}

export const AvaDesc: React.FC<AvaDescType> = ({profile}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={styles.avaDesc}>
            <div>
                <img className={styles.ava}
                     src={profile.photos.large ? profile.photos.large : ava}
                     alt={"profileImage"}/>
                <Status/>
            </div>
            <div className={styles.desc}>
                <span>{profile.aboutMe}</span>
                <span>{profile.fullName}</span>
                <span>{profile.lookingForAJobDescription}</span>
            </div>
        </div>
    )
}

type StateType = {
    editeMode: boolean
    value: string
}

class Status extends React.Component {
    state: StateType = {
        editeMode: false,
        value: "value"
    }

    isEditeMode = () => {
        this.setState({
            editeMode: !this.state.editeMode
        })
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editeMode
                    ? <div>
                        <span onDoubleClick={this.isEditeMode}>{this.state.value}</span>
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