import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src='http://rzncit.ru/media/k2/items/cache/8b072d4f47fa16702f8c7356d2c88ee8_M.jpg' />
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    );
}

export default Profile;