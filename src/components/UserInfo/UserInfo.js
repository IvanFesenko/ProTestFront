import { useHistory } from 'react-router'
import PropTypes from 'prop-types'
import styles from './UserInfo.module.css'

import avatar from './../../assets/images/avatar.png'

const UserInfo = ({avatar, name}) => {

    const history = useHistory();

    const onSignOut = () =>{
        history.push('/auth')
    }

    return (
        <div className={styles.userInfo}>
            <img src={avatar}></img>
            <b>{name}</b>
            <i className={styles.signOut} onClick={()=>onSignOut()} ></i>
        </div>
    ) 
}

UserInfo.defaultProps = {
    avatar:avatar,
    name:'Name',
}

UserInfo.propTypes = {
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
}

export default UserInfo