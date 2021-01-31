import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/originals/b5/bb/fb/b5bbfbe67191cc6baf4753c6eb955e70.jpg' />
            { props.message }

            <div>
                <span>like</span>
                { props.likesCount }
            </div>
        </div>
    )
}

export default Post;