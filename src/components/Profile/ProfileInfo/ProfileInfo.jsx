import styles from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={'https://miro.medium.com/v2/resize:fit:600/1*NZ1j7rFDmd1jg5zFyYPcDg.jpeg'}></img>
            </div>
            <div className={styles.descriptionBlock}>
                ava + description
            </div>

        </div>
    )
}

export default ProfileInfo;