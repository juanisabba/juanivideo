import React, { useState, useEffect } from "react";
import CustomPagination from "../components/Pagination/CustomPagination";
import "./styles.css";
import SingleContentTrending from '../components/SingleContentTrending/SingleContentTrending'

export default function Trending() {
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);

  const API_TRENDING = `https://api.themoviedb.org/3/trending/all/day?api_key=2e19df2909e1c17b76487f7eb65aacbc&page=${page}`;

  const fetchTrending = async () => {
    const res = await fetch(API_TRENDING);
    const data = await res.json();
    setTrending(data.results);
  };

  useEffect(() => {
    fetchTrending();
    //eslint-disable-next-line
  });

  return (
    <>
      <div className="trending-page">
        <div className="trending-title" style={{textAlign:"center"}}>Trending Now</div>
        <CustomPagination setPage={setPage} />

        {trending &&
          trending.map((movie) => (
            <SingleContentTrending
            key={movie.id}
            id={movie.id}
            backdrop={movie.backdrop_path}
            title={movie.title || movie.name}
            date={movie.release_date || movie.first_air_date}
            media_type={movie.media_type}
            vote_average={movie.vote_average}
          />

          ))}
      </div>
    </>
  );
}
