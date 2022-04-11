import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.header}>
            <img src="" alt="logo"/>
            <ul className={styles.nav}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Playlists</a></li>
                <li><a href="#">Library</a></li>
                <li><a href="#">Search</a></li>
            </ul>
            <img src="" alt="avatar"/>
        </div>
    )
}

export default Header;