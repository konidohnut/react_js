import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src={'https://miro.medium.com/v2/resize:fit:600/1*NZ1j7rFDmd1jg5zFyYPcDg.jpeg'}></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;