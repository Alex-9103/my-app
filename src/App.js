import {useEffect, useState} from "react";

import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg';
//12fb2ed0

const API_URL='http://www.omdbapi.com?apikey=12fb2ed0';


const App =()=> {

    const [movies,setMovies] = useState([]);
    const [searhTerm,setSearchTerm]=useState('');

    const searchMovies= async (title) =>{
        const response=await fetch(`${API_URL}&s=${title}`)
        const data=await response.json();

        setMovies(data.Search);

    }

    useEffect(()=>{

        searchMovies('avengers');
    },[]);

    return(

        <div className="app">

            <h1>MovieHub</h1>

            <div className="search">
                <input
                 placeholder="Search for movies"
                 value={searhTerm}
                 onChange={(e)=>setSearchTerm(e.target.value)}
                />

                <img
                    src={SearchIcon} 
                    alt="search"
                    onClick={()=>searchMovies(searhTerm)}
                />

            </div>

            {
                movies?.length>0 ?(
                    <div className="container">
                        {movies.map((movie) =>(<MovieCard movie={movie}/>) )}
                    </div>
                )
                :
                (
                    <div className="empty">

                        <h2>No movies found</h2>
                    </div>

                )
            }

            

        </div>
    );
}

export default App;