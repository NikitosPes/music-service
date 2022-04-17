import Navmenu from "../Navmenu/Navmenu";
import styles from "./App.module.css"
import MusicList from "../MusicList/MusicList";
import Search from "../Search/Search";
import {IPerformerModel, ISongModel} from "../../Interfaces/interfaces";
function App() {
    return <div className={styles.appMain}>
        <Navmenu/>
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
        name: "I was mad for loving",
        groupName: "Kiss",
        duration: "4:31"
    }
]



export default App;