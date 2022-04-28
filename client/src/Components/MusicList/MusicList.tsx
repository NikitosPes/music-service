import React from 'react';
import MusicListItem from '../MusicListItem/MusicListItem';
import { ISongModel } from '../../Interfaces/interfaces';

import styles from './MusicList.module.css';

const MusicList: React.FC<{title: string}> = ({title}) => {
    return (
        <div className={styles.musicListContainer}>
            <div className={styles.musicListContainerHead} >
                <h2 className={styles.musicListContainerTitle} >{title}</h2>
                <button className={styles.musicListContainerButton} >
                        See All 
                </button>
            </div>
            {songs.map((song, index) => <MusicListItem index={index} song={song}/>)}
            
        </div>
    )
}

export default MusicList;


const songs:ISongModel[] = [
    {
        imgURL: null, 
        name: 'testSong1',
        groupName:'testGroupName',
        duration: '3:53'
    },
    {
        imgURL: null, 
        name: 'testSong2',
        groupName:'testGroupName',
        duration: '4:20'
    }
]


