import React from "react";
import { img_300, unavailableLandscape } from "../../config/config";
import ContentModal from "../ContentModal/ContentModal";
import "../SingleContent/SingleContent.css";
import "../../pages/styles.css";

export default function SingleContentTrending({
  id,
  backdrop,
  title,
  media_type,
  vote_average,
  date,
}) {
  return (
    <ContentModal media_type={media_type} id={id}>
      <div className="single-component">
        <img
          key={id}
          alt={title}
          src={backdrop ? `${img_300}/${backdrop}` : unavailableLandscape}
        />
        <div className="info">
          <div className="info-top">
          <h4 className="popular-title">{title}</h4>
            <h3 className={vote_average >= 7 ? "green" : "orange"}>
              {vote_average}
            </h3>
          </div>
          <div className="info-bottom">
            <span>{media_type === "movie" ? "Movie" : "Series"}</span>
            <span>{date.substr(0, 4)}</span>
          </div>
        </div>
      </div>
    </ContentModal>
  );
}
