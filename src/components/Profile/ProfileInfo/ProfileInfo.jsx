import React from 'react';
import s from './ProfileInfo.module.css';
import headerImg from '../../../assets/images/header.jpg';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    // if (!props.profile) {
    //     return <Preloader/>
    // }

    return (
        <div>
            <div>
                <img src={headerImg} />
            </div>
            <div className={s.descriptionBlock}>
                {/*<img src={props.profile.photos.large}/>*/}
                <ProfileStatus status={"hello my friends"}/>
            </div>
        </div>
    )
}

export default ProfileInfo;