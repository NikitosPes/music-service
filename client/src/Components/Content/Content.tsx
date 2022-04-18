
import MusicList from "../MusicList/MusicList";
import styles from './Content.module.css'
import Header from "./Header/Header";

const Content = () => {
    return (
        <div className={styles.content}>
            <Header />
            <MusicList title={'Recommendations'}/>
        </div>
    )
}






export default Content;