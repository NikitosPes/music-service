import Navmenu from "../Navmenu/Navmenu";
import styles from "./App.module.css"
import MusicList from "../MusicList/MusicList";
import Search from "../Search/Search";
import {IPerformerModel, IPlaylistModel, ISongModel} from "../../Interfaces/interfaces";
function App() {
    return <div className={styles.appMain}>
        <Navmenu myPlaylists={MyPlaylists}/>
        <Search searchRequest={searchReq}/>
        <MusicList title={'Recommendations'}/>
    </div>
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

const MyPlaylists: Array<IPlaylistModel> = [
    {
        title: "Back to 2000s",
        description: 'My first playlist'
    },
    {
        title: "Classic",
        description: 'My second playlist'
    }
]



export default App;