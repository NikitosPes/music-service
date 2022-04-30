import styles from './Content.module.css'
import Header from "./Header/Header";
import {Route, Routes, useLocation} from "react-router-dom";
import Main from "../../Pages/Main/Main";
import Favourites from "../../Pages/Favourites/Favourites";
import Genres from "../../Pages/Genres/Genres";

import SearchResult from "../../Pages/SearchResult/SearchResult";
import Search from "./Header/Search/Search";
import {ISongModel} from "../../Interfaces/interfaces";


enum Path {
    Recent = 'Recent',
    Favourites = 'Favourites',
    Albums = 'Albums',
    MyFiles = 'My files',
    Main = 'Main'
}

const Content = () => {
    const location = useLocation();



    const parsePathname = (pathname : string) => {
        switch (pathname) {
            case '/recent': {
                return Path.Recent;
            }
            case '/favourites': {
                return Path.Favourites
            }
            case '/myAlbums': {
                return Path.Albums
            }
            case '/myFiles': {
                return Path.MyFiles
            }
            case '/': {
                return Path.Main
            }
            default: return ''
        }
    }

    return (
        <div className={styles.content}>
            {
                (location.pathname === '/search')
                    ? <Header children={<Search searchRequest={searchReq} />}/>
                    : <Header children={<h2>{parsePathname(location.pathname)}</h2>}/>
            }

            <Routes>
                <Route index element={<Main />}/>
                <Route path='favourites' element={<Favourites />} />
                <Route path='genres' element={<Genres />}/>
                <Route path='search'>
                    <Route path='?req=:req' element={<SearchResult/>}/>
                </Route>
            </Routes>
        </div>
    )
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




export default Content;