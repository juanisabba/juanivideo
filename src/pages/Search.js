import React, { useState, useEffect } from "react";
import "./styles.css";
import SingleContentSearch from "../components/SingleContentSearch/SingleContentSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Trending() {
  const [content, setContent] = useState([]);
  const [searchText, setSearchText] = useState("");

  const API_SEARCH = `https://api.themoviedb.org/3/search/multi?api_key=2e19df2909e1c17b76487f7eb65aacbc&language=en-US&query=${searchText}&page=1&include_adult=false`;

  const fetchSearch = async () => {
    const res = await fetch(API_SEARCH);
    const data = await res.json();
    setContent(data.results);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    fetchSearch();
  };

  useEffect(() => {
    //eslint-disable-next-line
  });

  return (
    <>
    <div className="search">
      <form className="form-searching-text" onSubmit={handleSumbit}>
        <input
          className="searching-text"
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button>
          <FontAwesomeIcon
            icon={faSearch}
            aria-hidden="true"
            className="searching-icon"
            color="#fff"
          />
        </button>
      </form>
      <div className="trending-page">
        {content &&
          content.map((movie) => (
            <SingleContentSearch
              key={movie.id}
              id={movie.id}
              backdrop={movie.poster_path || movie.profile_path}
              title={movie.title || movie.name}
              date={movie.release_date || movie.first_air_date || ""}
              media_type={movie.media_type || ""}
              vote_average={movie.vote_average || ""}
            />
          ))}
      </div>
    </div>
    </>
  );
}
