import React from "react"
import styles from "./Profile.module.css"
import {ProfileType} from "../../redux/store"
import {Preloader} from "../Common/Preloader/Preloader"


type AvaDescType = {
    profile: ProfileType | null
}

const ava = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrrxsxZSpsfebkw8VLXe6R5j7mryT6PK7Pg&usqp=CAU"

export const AvaDesc:React.FC<AvaDescType> = ({profile}) => {
    console.log(profile)
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={styles.avaDesc}>
            <div>
                <img className={styles.ava}
                     src={profile.photos.large? profile.photos.large : ava}
                     alt={"profile photo"}/>
            </div>
            <div className={styles.desc}>
               <span>{profile.aboutMe}</span>
               <span>{profile.fullName}</span>
               <span>{profile.lookingForAJobDescription}</span>
            </div>
        </div>
    )
}
