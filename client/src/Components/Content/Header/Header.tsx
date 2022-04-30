import styles from './Header.module.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import {ReactNode} from "react";

const Header: React.FC<{ children: ReactNode }> = ({children}) => {
    return (
        <div className={styles.header}>
            {children}
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

export default Header;