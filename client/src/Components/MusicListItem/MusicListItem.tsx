import React from 'react';
import { ISongModel } from '../../Interfaces/interfaces';

import styles from './MusicListItem.module.css';

const defaultItemImg = require('../../Assets/noPhoto.png');

interface MusicListItemProps {
    index: number,
    song: ISongModel
}

const MusicListItem: React.FC<MusicListItemProps> = ({...props}) => {
    return(
        <div className={styles.musicListItemContainer}>
            <span>{props.index}</span>
            <img className={styles.songImg} src={props.song.imgURL ? props.song.imgURL : defaultItemImg} alt="songImg" />
            <div>
                <p>{props.song.name}</p>
                <p>{props.song.groupName}</p>
            </div>
            <p>{props.song.duration}</p>
            <div>
                <button>btn1</button>
                <button>btn2</button>
            </div>
        </div>
    );
}

export default MusicListItem;