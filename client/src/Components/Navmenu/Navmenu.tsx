import styles from './Navmenu.module.css'
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ReplayIcon from '@mui/icons-material/Replay';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';

function Navmenu() {
    const styleIcon = {
      width: "18px"
    };
    return (
        <div className={styles.nav_menu}>
            <img src="" alt="logo"/>

            <div className={styles.subMenu}>
                <div className={styles.subMenu_header}>
                    <h2 className={styles.title}>Menu</h2>
                </div>
                <ul className={styles.nav}>
                    <li className={styles.active}><a href="#"><TravelExploreIcon className={styles.icon} style={styleIcon}/>Explore</a></li>
                    <li><a href="#"><MusicNoteIcon className={styles.icon} style={styleIcon}/>Genres</a></li>
                    <li><a href="#"><AlbumOutlinedIcon className={styles.icon} style={styleIcon}/>Albums</a></li>
                    <li><a href="#"><MicOutlinedIcon className={styles.icon} style={styleIcon}/>Artists</a></li>
                    <li><a href="#"><PodcastsOutlinedIcon className={styles.icon} style={styleIcon}/>Podcasts</a></li>
                </ul>
            </div>
            <div className={styles.subMenu}>
                <div className={styles.subMenu_header}>
                    <h2 className={styles.title}>Library</h2>
                </div>
                <ul className={styles.nav}>
                    <li><a href="#"><ReplayIcon className={styles.icon} style={styleIcon}/>Recent</a></li>
                    <li><a href="#"><FavoriteIcon className={styles.icon} style={styleIcon}/>Favourites</a></li>
                    <li><a href="#"><AlbumOutlinedIcon className={styles.icon} style={styleIcon}/>Albums</a></li>
                    <li><a href="#"><FolderOpenOutlinedIcon className={styles.icon} style={styleIcon}/>My files</a></li>
                </ul>
            </div>
            <div className={styles.subMenu}>
                <div className={styles.subMenu_header}>
                    <h2 className={styles.title}>Playlists</h2>
                    <button>+</button>
                </div>
                <ul className={styles.nav}>
                    <li><a href="#"><QueueMusicIcon className={styles.icon} style={styleIcon}/>Classics</a></li>
                    <li><a href="#"><QueueMusicIcon className={styles.icon} style={styleIcon}/>Unplugged</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navmenu;