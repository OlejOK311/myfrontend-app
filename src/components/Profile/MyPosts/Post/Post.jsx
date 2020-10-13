import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQL9hZrj2KU-Fnfic14tk-kRU1zufKYK5yH-Q&usqp=CAU'/>
            post 1
            <div>
                <span>like</span>
            </div>        
        </div>      
    );
}

export default Post;