import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.posts}>
            <div className={classes.item}>
                <img
                    src='data:image/jpeg;base64,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'></img>
                {props.message}
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
)
}

export default Post;