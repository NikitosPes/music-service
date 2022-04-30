import styles from './Navmenu.module.css'
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
import ReplayIcon from '@mui/icons-material/Replay';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import {IPlaylistModel} from "../../Interfaces/interfaces";
import {NavLink} from "react-router-dom";


const Navmenu:React.FC<{myPlaylists: IPlaylistModel[]}> = ({myPlaylists}) => {
    const styleIcon = {
      width: "18px"
    };
    return (

        <div className={styles.nav_menu}>
            <NavLink to={'/'}>
                <img src="" alt="logo"/>
            </NavLink>
            <div className={styles.subMenu}>
                <div className={styles.subMenu_header}>
                    <h2 className={styles.title}>Menu</h2>
                </div>
                <ul className={styles.nav}>
                    <NavLink  to="/search" className={(navData) => navData.isActive ? styles.active : ''}><div><SearchIcon className={styles.icon} style={styleIcon}/>Search</div></NavLink>
                    <NavLink to="/recent" className={(navData) => navData.isActive ? styles.active : ''}><div><ReplayIcon className={styles.icon} style={styleIcon}/>Recent</div></NavLink>
                    <NavLink to="favourites" className={(navData) => navData.isActive ? styles.active : ''}><div><FavoriteIcon className={styles.icon} style={styleIcon}/>Favourites</div></NavLink>
                    <NavLink to="/myAlbums" className={(navData) => navData.isActive ? styles.active : ''}><div><AlbumOutlinedIcon className={styles.icon} style={styleIcon}/>Albums</div></NavLink>
                    <NavLink to="/myFiles" className={(navData) => navData.isActive ? styles.active : ''}><div><FolderOpenOutlinedIcon className={styles.icon} style={styleIcon}/>My files</div></NavLink>
                </ul>
            </div>
            <div className={styles.subMenu}>
                <div className={styles.subMenu_header}>
                    <h2 className={styles.title}>Playlists</h2>
                    <button>+</button>
                </div>
                <ul className={styles.nav}>
                    {
                        myPlaylists.map(playlist => <NavLink to='/playlist' ><div><QueueMusicIcon className={styles.icon} style={styleIcon}/>{playlist.title}</div></NavLink>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navmenu;