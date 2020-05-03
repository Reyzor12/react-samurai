import React from 'react';
import s from './ProfileInfo.module.css';
import headerImg from '../../../assets/images/header.jpg';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={headerImg} />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;