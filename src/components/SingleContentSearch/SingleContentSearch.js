import React from "react";
import { img_500, unavailable } from "../../config/config";
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
      <div className="single-component-poster single-component">
        <img
          key={id}
          alt={title}
          src={backdrop ? `${img_500}/${backdrop}` : unavailable}
        />
        <div className="info-poster">
          <div className="info-top">
            <span className="add-icon">
              + <h5 className="add-icon-text">Add to favourites</h5>
            </span>
            <h3 className={vote_average >= 7 ? "green" : "orange"}>
              {vote_average}
            </h3>
          </div>
          <h4 className="trending-title">{title}</h4>
          <div className="info-bottom">
            <span>{media_type === "movie" ? "Movie" : media_type === "tv" ? "Series" : "Actor"}</span>
            <span>{date.substr(0, 4)}</span>
          </div>
        </div>
      </div>
    </ContentModal>
  );
}
