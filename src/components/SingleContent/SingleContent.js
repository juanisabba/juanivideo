import React from 'react'
import {img_300, unavailableLandscape} from '../../config/config'
import ContentModal from '../ContentModal/ContentModal'
import './SingleContent.css'

export default function SingleContent({id, backdrop, title, media_type, vote_average}) {
    return (
            <ContentModal media_type={media_type} id={id}>
                <img
                  className="carousel-img"
                  src={
                    backdrop
                    ? `${img_300}/${backdrop}`
                    : unavailableLandscape
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
