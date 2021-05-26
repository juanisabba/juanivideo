import React from 'react'
import {img_300, unavailable} from '../../config/config'
import ContentModal from '../ContentModal/ContentModal'
import '../SingleContent/SingleContent.css'

export default function SingleContentPoster({id, poster, title, media_type, vote_average}) {
    return (
            <ContentModal media_type={media_type} id={id}>
                <img
                  className="carousel-img-poster"
                  src={
                    poster
                    ? `${img_300}/${poster}`
                    : unavailable
                  }
                  alt={title}
                ></img>
                <div className="backdrop-info">
                    <span>{title}</span>
                  <span className={vote_average >= 7 ? "green" : "orange"}>{vote_average}</span>
                </div>
            </ContentModal>
    )
}
