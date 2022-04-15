import Navmenu from "../Navmenu/Navmenu";
import styles from "./App.module.css"
import MusicList from "../MusicList/MusicList";
import Search from "../Search/Search";
function App() {
    return <div className={styles.appMain}>
        <Navmenu/>
        <Search/>
        <MusicList title={'Recommendations'}/>
    </div>
}

export default App;