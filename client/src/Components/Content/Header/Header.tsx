import Search from "./Search/Search";
import {ISongModel} from "../../../Interfaces/interfaces";
import styles from './Header.module.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = () => {
    return (
        <div className={styles.header}>
            <Search searchRequest={searchReq}/>
            <div className={styles.serviceBlock}>
                <NotificationsIcon className={styles.icon}/>
                <SettingsIcon className={styles.icon}/>
                <div className={styles.btn}>
                    Freddie Jones
                </div>
            </div>
        </div>
    )
}
const searchReq = (data: string) => { // logic on server
    return Songs.find(song => data === song.name)
}

const Songs: Array<ISongModel> = [
    {
        imgURL:  null,
        name: "I was made for loving",
        groupName: "Kiss",
        duration: "4:31"
    }
]
export default Header;