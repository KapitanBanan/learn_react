
import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
                <img src='https://vignette.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/8/8d/%D0%9A%D0%B0%D0%B3%D1%83%D1%8F_%D0%A1%D0%B8%D0%BD%D0%BE%D0%BC%D0%B8%D1%8F_%28%D0%B0%D0%BD%D0%B8%D0%BC%D1%8D%29.png/revision/latest?cb=20200420153205&path-prefix=ru'></img>
                {props.massage}
            </div>
            <div>
                likes count:{props.likesCount}
            </div>

        </div>
    )
}

export default Post;