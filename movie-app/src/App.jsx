import { useState, useEffect } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import MovieSearch from "./components/MovieSearch";

function App() {
  //biến - gán giá trị cho biến; []: array rỗng
  const [movie, setMovie] = useState([]); //truyền giá trị ban đầu cho cái movie

  const [movieRate, setMovieRate] = useState([]);

  //search
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = async (searchVal) => {
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=vi&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setMovieSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  //useEffect: chạy 1 lần duy nhất khi component được render, ở trang ban đầu
  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url1 =
        "https://api.themoviedb.org/3/movie/popular?language=vi&page=1";

      const url2 =
        "https://api.themoviedb.org/3/tv/top_rated?language=vi&page=1";
      // const response = await fetch(url, options); //hàm fetch gọi api
      // const data = await response.json(); //chuyển dữ liệu về json

      // setMovie(data.results);

      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ]);
      const data1 = await res1.json();
      const data2 = await res2.json();

      setMovie(data1.results);
      setMovieRate(data2.results);
    };
    fetchMovie();
  }, []); //array để rỗng, load trang chạy đúng 1 lần

  return (
    <div className="bg-black pb-10">
      <Header onSearch={handleSearch} />
      <Banner />
      {movieSearch.length > 0 ? (
        <MovieSearch title={"Kết  quả tìm kiếm"} data={movieSearch} />
      ) : (
        <>
          <MovieList title={"Phim Hot"} data={movie} />
          <MovieList title={"Phim Để Cử"} data={movieRate} />
        </>
      )}

      {/* movie.slice(0, 5) */}
    </div>
  );
}

export default App;
