import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import ContentModal from '../ContentModal/ContentModal'
import '../SingleContent/SingleContent.css'

export default function SingleContent({id, media_type}) {
    return (
            <ContentModal media_type={media_type} id={id}>
        <button className="information">
          <FontAwesomeIcon
            icon={faInfoCircle}
            aria-hidden="true"
            className="button-icon"
            color="#fff"
          />
          MORE INFO
        </button>
            </ContentModal>
    )
}
