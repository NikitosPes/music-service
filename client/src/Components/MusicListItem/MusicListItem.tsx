import React from 'react';
import { ISongModel } from '../../Interfaces/interfaces';

import styles from './MusicListItem.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';

const defaultItemImg = require('../../Assets/noPhoto.png');

interface MusicListItemProps {
    index: number,
    song: ISongModel
}

const MusicListItem: React.FC<MusicListItemProps> = ({...props}) => {
    return(
        <div className={styles.musicListItemContainer}>
            <span className={styles.musicListItemindex} >{props.index}</span>
             <div className={styles.musicListSong} >   
                <img className={styles.songImg} src={props.song.imgURL ? props.song.imgURL : defaultItemImg} alt="songImg" />
                <div className={styles.musicListItemSong} >
                    <p className={styles.musicListItemName} >{props.song.name}</p>
                    <button className={styles.musicListItemGroupName} >{props.song.groupName}</button>
                </div>
            </div>
            <p className={styles.musicListItemSongDuration} >{props.song.duration}</p>
            <div className={styles.musicListItemButton} >
                <button className={styles.musicListItemButtonLike} >
                    <FavoriteBorderIcon/>
                </button>
                <button className={styles.musicListItemButtonAdd} >
                    <AddIcon/>
                </button>
            </div>
        </div>
    );
}

export default MusicListItem;