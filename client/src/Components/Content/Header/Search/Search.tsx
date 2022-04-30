import SearchIcon from '@mui/icons-material/Search';
import styles from './Search.module.css'
import {useEffect, useState} from "react";
import {IPerformerModel, ISongModel} from "../../../../Interfaces/interfaces";
import {createSearchParams, useNavigate} from "react-router-dom";

const Search: React.FC<{ searchRequest: (data: string) => ISongModel | undefined }> = ({searchRequest} ) =>  {

    const[input, setInput] = useState<string>('');
    const[searchResult, setSearchResult] = useState<ISongModel | undefined>();

    const navigate = useNavigate();




    useEffect(
        () => {
            let res : ISongModel | undefined = searchRequest(input);
            setSearchResult(res);
            if(input !== '') {
                navigate({
                    pathname: 'search',
                    search: createSearchParams({
                        req: input
                    }).toString()
                })
            }

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