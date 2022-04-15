import SearchIcon from '@mui/icons-material/Search';
import styles from './Search.module.css'

function Search() {
    return (
        <div className={styles.searchBox}>
            <input type="text" placeholder={'Search'}/>
            <SearchIcon className={styles.icon}/>
        </div>
    )
}

export default Search;