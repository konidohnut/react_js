import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
        </div>
        <div className={classes.posts}>
            <Post message='Hi, how are you?' likeCount='0'/>
            <Post message="It's my first post" likeCount='23'/>
        </div>
    </div>
}
export default MyPosts;