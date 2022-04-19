import Navmenu from "../Navmenu/Navmenu";
import styles from "./App.module.css"
import {IPlaylistModel} from "../../Interfaces/interfaces";
import Content from "../Content/Content";


function App() {
    return <div className={styles.appMain}>
        <Navmenu myPlaylists={MyPlaylists}/>
        <Content />
    </div>
}

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