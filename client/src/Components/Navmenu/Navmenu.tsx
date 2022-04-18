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
import {IPlaylistModel} from "../../Interfaces/interfaces";


const Navmenu:React.FC<{myPlaylists: IPlaylistModel[]}> = ({myPlaylists}) => {
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
                    <a href="#" className={styles.active}><div><TravelExploreIcon className={styles.icon} style={styleIcon}/>Explore</div></a>
                    <a href="#"><div><MusicNoteIcon className={styles.icon} style={styleIcon}/>Genres</div></a>
                    <a href="#"><div><AlbumOutlinedIcon className={styles.icon} style={styleIcon}/>Albums</div></a>
                    <a href="#"><div><MicOutlinedIcon className={styles.icon} style={styleIcon}/>Artists</div></a>
                    <a href="#"><div><PodcastsOutlinedIcon className={styles.icon} style={styleIcon}/>Podcasts</div></a>
                </ul>
            </div>
            <div className={styles.subMenu}>
                <div className={styles.subMenu_header}>
                    <h2 className={styles.title}>Library</h2>
                </div>
                <ul className={styles.nav}>
                    <a href="#"><div><ReplayIcon className={styles.icon} style={styleIcon}/>Recent</div></a>
                    <a href="#"><div><FavoriteIcon className={styles.icon} style={styleIcon}/>Favourites</div></a>
                    <a href="#"><div><AlbumOutlinedIcon className={styles.icon} style={styleIcon}/>Albums</div></a>
                    <a href="#"><div><FolderOpenOutlinedIcon className={styles.icon} style={styleIcon}/>My files</div></a>
                </ul>
            </div>
            <div className={styles.subMenu}>
                <div className={styles.subMenu_header}>
                    <h2 className={styles.title}>Playlists</h2>
                    <button>+</button>
                </div>
                <ul className={styles.nav}>
                    {
                        myPlaylists.map(playlist => <a href="#"><div><QueueMusicIcon className={styles.icon} style={styleIcon}/>{playlist.title}</div></a>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navmenu;