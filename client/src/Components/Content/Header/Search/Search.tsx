import SearchIcon from '@mui/icons-material/Search';
import styles from './Search.module.css'
import {useEffect, useState} from "react";
import {IPerformerModel, ISongModel} from "../../../../Interfaces/interfaces";

const Search: React.FC<{ searchRequest: (data: string) => ISongModel | undefined }> = ({searchRequest} ) =>  {

    const[input, setInput] = useState<string>('');
    const[searchResult, setSearchResult] = useState<ISongModel | undefined>();

    useEffect(
        () => {
            let res : ISongModel | undefined = searchRequest(input);
            setSearchResult(res);
        }, [input])

    return (
        <>
            <div className={styles.searchBox}>
                <input type="text" placeholder={'Search'} value={input} onChange={(e) => {setInput(e.currentTarget.value)}}/>
                <SearchIcon className={styles.icon}/>
            </div>
            <div>
                {
                 searchResult && <h3>Result: {searchResult.name}</h3>
                }
            </div>
        </>

    )
}

export default Search;