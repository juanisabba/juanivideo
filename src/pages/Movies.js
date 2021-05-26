import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "./styles.css";
import contratiempo from "../img/contratiempo.jpg";
import contratiempoLogo from "../img/contratiempo-logo.png";
import SingleContent from "../components/SingleContent/SingleContent";
import SingleContentPoster from "../components/SingleContentPoster/SingleContentPoster";
import SingleContentButton from "../components/SingleContentButton/SingleContentButton";

SwiperCore.use([Navigation]);

export default function Movies() {
  const [trending, setTrending] = useState([]);
  const [trendingWeek, setTrendingWeek] = useState([]);
  const [action, setAction] = useState([]);
  const [romance, setRomance] = useState([]);
  const [science, setScience] = useState([]);
  const [horror, setHorror] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [history, setHistory] = useState([]);
  const [drama, setDrama] = useState([]);

  const API_TRENDING = `https://api.themoviedb.org/3/trending/movie/day?api_key=2e19df2909e1c17b76487f7eb65aacbc&page=1`;
  const API_TRENDING_WEEK = `https://api.themoviedb.org/3/trending/movie/week?api_key=2e19df2909e1c17b76487f7eb65aacbc&page=1`;
  const API_ACTION = `https://api.themoviedb.org/3/discover/movie?api_key=2e19df2909e1c17b76487f7eb65aacbc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`;
  const API_ROMANCE = `https://api.themoviedb.org/3/discover/movie?api_key=2e19df2909e1c17b76487f7eb65aacbc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`;
  const API_SCIENCE_FICTION = `https://api.themoviedb.org/3/discover/movie?api_key=2e19df2909e1c17b76487f7eb65aacbc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878`;
  const API_HORROR = `https://api.themoviedb.org/3/discover/movie?api_key=2e19df2909e1c17b76487f7eb65aacbc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`;
  const API_ANIMATION = `https://api.themoviedb.org/3/discover/movie?api_key=2e19df2909e1c17b76487f7eb65aacbc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16`;
  const API_HISTORY = `https://api.themoviedb.org/3/discover/movie?api_key=2e19df2909e1c17b76487f7eb65aacbc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=36`;
  const API_drama = `https://api.themoviedb.org/3/discover/movie?api_key=2e19df2909e1c17b76487f7eb65aacbc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18`;

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

  const fetchAction = async () => {
    const res = await fetch(API_ACTION);
    const data = await res.json();
    setAction(data.results);
  };

  const fetchRomance = async () => {
    const res = await fetch(API_ROMANCE);
    const data = await res.json();
    setRomance(data.results);
  };

  const fetchScience = async () => {
    const res = await fetch(API_SCIENCE_FICTION);
    const data = await res.json();
    setScience(data.results);
  };

  const fetchHorror = async () => {
    const res = await fetch(API_HORROR);
    const data = await res.json();
    setHorror(data.results);
  };

  const fetchAnimation = async () => {
    const res = await fetch(API_ANIMATION);
    const data = await res.json();
    setAnimation(data.results);
  };

  const fetchHistory = async () => {
    const res = await fetch(API_HISTORY);
    const data = await res.json();
    setHistory(data.results);
  };

  const fetchDrama = async () => {
    const res = await fetch(API_drama);
    const data = await res.json();
    setDrama(data.results);
  };

  useEffect(() => {
    fetchTrending();
    fetchTrendingWeek();
    fetchAction();
    fetchRomance();
    fetchScience();
    fetchHorror();
    fetchAnimation();
    fetchHistory();
    fetchDrama();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="cover-page">
        <img className="cover-page-img cover-page-img-series" src={contratiempo} alt="Contratiempo" />
        <img
          className="cover-page-title cover-page-title-movies"
          src={contratiempoLogo}
          alt="Contratiempo"
        />
        <h1>
          A young businessman wakes up next to the lifeless body of his lover
          and hires a prestigious lawyer to investigate what happened.
        </h1>
        <a
          href="https://www.netflix.com/title/80093106"
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
        <SingleContentButton key="411088" id="411088" media_type="movie" />
        <div className="age">13+</div>
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

        <div className="page-title">Action Films</div>
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
          {action &&
            action.map((movie) => (
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

        <div className="page-title">Romance Movies</div>
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
          {romance &&
            romance.map((movie) => (
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

        <div className="page-title">Science Fiction</div>
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
          {science &&
            science.map((movie) => (
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

        <div className="page-title">Horror Movies</div>
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
          {horror &&
            horror.map((movie) => (
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

        <div className="page-title">Animation</div>
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
          {animation &&
            animation.map((movie) => (
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

        <div className="page-title">History Films</div>
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
          {history &&
            history.map((movie) => (
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

        <div className="page-title">Drama</div>
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
          {drama &&
            drama.map((movie) => (
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
      </div>
    </>
  );
}
