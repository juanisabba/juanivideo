import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "./styles.css";
import queensGambit from "../img/queens-gambit.jpg";
import queensGambitLogo from "../img/queens-gambit-logo.png";
import SingleContent from "../components/SingleContent/SingleContent";
import SingleContentPoster from "../components/SingleContentPoster/SingleContentPoster";
import SingleContentButton from "../components/SingleContentButton/SingleContentButton";

SwiperCore.use([Navigation]);

export default function TvShows() {
  const [trending, setTrending] = useState([]);
  const [trendingWeek, setTrendingWeek] = useState([]);
  const [mistery, setMistery] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [war, setWar] = useState([]);
  const [documentary, setDocumentary] = useState([]);
  const [kids, setKids] = useState([]);
  const [crime, setCrime] = useState([]);
  const [drama, setDrama] = useState([]);

  const API_TRENDING = `https://api.themoviedb.org/3/trending/tv/day?api_key=2e19df2909e1c17b76487f7eb65aacbc&page=1`;
  const API_TRENDING_WEEK = `https://api.themoviedb.org/3/trending/tv/week?api_key=2e19df2909e1c17b76487f7eb65aacbc&page=1`;
  const API_MISTERY = `https://api.themoviedb.org/3/discover/tv?api_key=2e19df2909e1c17b76487f7eb65aacbc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648`;
  const API_COMEDY = `https://api.themoviedb.org/3/discover/tv?api_key=2e19df2909e1c17b76487f7eb65aacbc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`;
  const API_WAR = `https://api.themoviedb.org/3/discover/tv?api_key=2e19df2909e1c17b76487f7eb65aacbc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10768`;
  const API_DOCUMENTARY = `https://api.themoviedb.org/3/discover/tv?api_key=2e19df2909e1c17b76487f7eb65aacbc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`;
  const API_KIDS = `https://api.themoviedb.org/3/discover/tv?api_key=2e19df2909e1c17b76487f7eb65aacbc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10762`;
  const API_CRIME = `https://api.themoviedb.org/3/discover/tv?api_key=2e19df2909e1c17b76487f7eb65aacbc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80`;
  const API_DRAMA = `https://api.themoviedb.org/3/discover/tv?api_key=2e19df2909e1c17b76487f7eb65aacbc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18`;

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

  const fetchMistery = async () => {
    const res = await fetch(API_MISTERY);
    const data = await res.json();
    setMistery(data.results);
  };

  const fetchComedy = async () => {
    const res = await fetch(API_COMEDY);
    const data = await res.json();
    setComedy(data.results);
  };

  const fetchWar = async () => {
    const res = await fetch(API_WAR);
    const data = await res.json();
    setWar(data.results);
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

  const fetchCrime = async () => {
    const res = await fetch(API_CRIME);
    const data = await res.json();
    setCrime(data.results);
  };

  const fetchDrama = async () => {
    const res = await fetch(API_DRAMA);
    const data = await res.json();
    setDrama(data.results);
  };

  useEffect(() => {
    fetchTrending();
    fetchTrendingWeek();
    fetchMistery();
    fetchComedy();
    fetchWar();
    fetchDocumentary();
    fetchKids();
    fetchCrime();
    fetchDrama();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="cover-page">
        <img
          className="cover-page-img cover-page-img-series"
          src={queensGambit}
          alt="Queen's Gambit"
        />
        <img
          className="cover-page-title cover-page-title-series"
          src={queensGambitLogo}
          alt="Contratiempo"
        />
        <h1 className="description-series">
          In a Kentucky orphanage in the 1950s, a young girl discovers an
          astonishing talent for chess while struggling with addiction.
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
        <SingleContentButton key="87739" id="87739" media_type="tv" />
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

        <div className="page-title">Mistery</div>
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
          {mistery &&
            mistery.map((movie) => (
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

        <div className="page-title">Comedy Shows</div>
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
          {comedy &&
            comedy.map((movie) => (
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

        <div className="page-title">War & Politics</div>
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
          {war &&
            war.map((movie) => (
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
                  media_type="tv"
                  vote_average={movie.vote_average}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="page-title">Kids TV Shows</div>
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

        <div className="page-title">Crime TV Series</div>
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
          {crime &&
            crime.map((movie) => (
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
