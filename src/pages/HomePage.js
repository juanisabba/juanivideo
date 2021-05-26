import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "./styles.css";
import strangerThings from "../img/stranger-things.jpg";
import strangerThingsLogo from "../img/stranger-things-logo.png";
import SingleContent from "../components/SingleContent/SingleContent";
import SingleContentPoster from "../components/SingleContentPoster/SingleContentPoster";
import SingleContentButton from "../components/SingleContentButton/SingleContentButton";

SwiperCore.use([Navigation]);

export default function Trending() {
  const [trending, setTrending] = useState([]);
  const [trendingWeek, setTrendingWeek] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [actionTv, setActionTv] = useState([]);
  const [documentary, setDocumentary] = useState([]);
  const [kids, setKids] = useState([]);

  const API_TRENDING = `https://api.themoviedb.org/3/trending/all/day?api_key=2e19df2909e1c17b76487f7eb65aacbc&page=1`;
  const API_TRENDING_WEEK = `https://api.themoviedb.org/3/trending/all/week?api_key=2e19df2909e1c17b76487f7eb65aacbc&page=1`;
  const API_COMEDY_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=2e19df2909e1c17b76487f7eb65aacbc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`;
  const API_ACTION = `https://api.themoviedb.org/3/discover/tv?api_key=2e19df2909e1c17b76487f7eb65aacbc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10759`;
  const API_DOCUMENTARY = `https://api.themoviedb.org/3/discover/movie?api_key=2e19df2909e1c17b76487f7eb65aacbc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`;
  const API_KIDS = `https://api.themoviedb.org/3/discover/tv?api_key=2e19df2909e1c17b76487f7eb65aacbc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10762`;

  const fetchTrending = async () => {
    const res = await fetch(API_TRENDING);
    const data = await res.json();
    setTrending(data.results);
  };

  const fetchTrendingWeek = async () => {
    const res = await fetch(API_TRENDING_WEEK);
    const data = await res.json();
    setTrendingWeek(data.results);
  };

  const fetchComedyMovies = async () => {
    const res = await fetch(API_COMEDY_MOVIES);
    const data = await res.json();
    setComedyMovies(data.results);
  };

  const fetchActionTv = async () => {
    const res = await fetch(API_ACTION);
    const data = await res.json();
    setActionTv(data.results);
  };

  const fetchDocumentary = async () => {
    const res = await fetch(API_DOCUMENTARY);
    const data = await res.json();
    setDocumentary(data.results);
  };

  const fetchKids = async () => {
    const res = await fetch(API_KIDS);
    const data = await res.json();
    setKids(data.results);
  };

  useEffect(() => {
    fetchTrending();
    fetchComedyMovies();
    fetchActionTv();
    fetchTrendingWeek();
    fetchDocumentary();
    fetchKids();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="cover-page">
        <img
          className="cover-page-img"
          src={strangerThings}
          alt="Stranger Things"
        />
        <img
          className="cover-page-title"
          src={strangerThingsLogo}
          alt="Stranger Things"
        />
        <h1>
          When a young boy vanishes, a small town uncovers a mystery involving
          secret experiments, terrifying supernatural forces, and one strange
          little girl.
        </h1>
        <a
          href="https://www.netflix.com/title/80057281"
          target="_blank"
          rel="noreferrer"
        >
          <button className="play">
            <FontAwesomeIcon
              icon={faPlay}
              aria-hidden="true"
              className="button-icon"
              color="#000"
            />
            PLAY
          </button>
        </a>
        <SingleContentButton key="66732" id="66732" media_type="tv" />
        <div className="age">16+</div>
      </div>
      <div className="carousels">
        <div className="page-title">Trending Now</div>
        <Swiper
          className="carousel"
          spaceBetween={5}
          slidesPerView={5}
          navigation
                    breakpoints={{
            0: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 4,
            },
            1100: {
              slidesPerView: 5,
            },
          }}

        >
          {trending &&
            trending.map((movie) => (
              <SwiperSlide key={movie.id}>
                <SingleContent
                  key={movie.id}
                  id={movie.id}
                  backdrop={movie.backdrop_path}
                  title={movie.title || movie.name}
                  date={movie.release_date || movie.first_air_date}
                  media_type={movie.media_type}
                  vote_average={movie.vote_average}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="page-title">Most Popular of the Month</div>
        <Swiper
          className="carousel"
          spaceBetween={5}
          slidesPerView={5}
          navigation
                    breakpoints={{
            0: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 4,
            },
            1100: {
              slidesPerView: 5,
            },
          }}

        >
          {trendingWeek &&
            trendingWeek.map((movie) => (
              <SwiperSlide key={movie.id}>
                <SingleContentPoster
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title || movie.name}
                  date={movie.release_date || movie.first_air_date}
                  media_type={movie.media_type}
                  vote_average={movie.vote_average}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="page-title">Comedy Movies</div>
        <Swiper
          className="carousel"
          spaceBetween={5}
          slidesPerView={5}
          navigation
                    breakpoints={{
            0: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 4,
            },
            1100: {
              slidesPerView: 5,
            },
          }}
        >
          {comedyMovies &&
            comedyMovies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <SingleContent
                  key={movie.id}
                  id={movie.id}
                  backdrop={movie.backdrop_path}
                  title={movie.title || movie.name}
                  date={movie.release_date || movie.first_air_date}
                  media_type="movie"
                  vote_average={movie.vote_average}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="page-title">Action & Adventure</div>
        <Swiper
          className="carousel"
          spaceBetween={5}
          slidesPerView={5}
          navigation
                    breakpoints={{
            0: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 4,
            },
            1100: {
              slidesPerView: 5,
            },
          }}

        >
          {actionTv &&
            actionTv.map((movie) => (
              <SwiperSlide key={movie.id}>
                <SingleContent
                  key={movie.id}
                  id={movie.id}
                  backdrop={movie.backdrop_path}
                  title={movie.title || movie.name}
                  date={movie.release_date || movie.first_air_date}
                  media_type="tv"
                  vote_average={movie.vote_average}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="page-title">Documentaries</div>
        <Swiper
          className="carousel"
          spaceBetween={5}
          slidesPerView={5}
          navigation
                    breakpoints={{
            0: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 4,
            },
            1100: {
              slidesPerView: 5,
            },
          }}

        >
          {documentary &&
            documentary.map((movie) => (
              <SwiperSlide key={movie.id}>
                <SingleContent
                  key={movie.id}
                  id={movie.id}
                  backdrop={movie.backdrop_path}
                  title={movie.title || movie.name}
                  date={movie.release_date || movie.first_air_date}
                  media_type="movie"
                  vote_average={movie.vote_average}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="page-title">Kids TV Series</div>
        <Swiper
          className="carousel"
          spaceBetween={5}
          slidesPerView={5}
          navigation
                    breakpoints={{
            0: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 4,
            },
            1100: {
              slidesPerView: 5,
            },
          }}

        >
          {kids &&
            kids.map((movie) => (
              <SwiperSlide key={movie.id}>
                <SingleContent
                  key={movie.id}
                  id={movie.id}
                  backdrop={movie.backdrop_path}
                  title={movie.title || movie.name}
                  date={movie.release_date || movie.first_air_date}
                  media_type="tv"
                  vote_average={movie.vote_average}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}
