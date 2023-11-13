"use client"
import Seo from '../components/Seo';
import { useEffect, useState } from "react";
const API_KEY = "9e5d46a1720b08db381261a21fc77e33";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async() => {
      const { results } = await (
        await fetch(
        `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title ="Home"/>
      { !movies && <div>로딩중...</div> }
      {movies?.map(movie => 
        <div key={movie.id}>
          {movie.original_title}</div>)}
    </div>
  )
}
