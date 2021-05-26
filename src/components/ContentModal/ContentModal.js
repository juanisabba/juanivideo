import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./ContentModal.css";
import { img_300, unavailable } from "../../config/config";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    position: "absolute",
    width: "90vw"
  },
  paper: {
    minHeight: "490px",
    backgroundColor: "rgb(40,40,40)",
    border: "none",
    borderRadius: "7px",
    color: "white",
    boxShadow: "0 0 40px #000",
    padding: theme.spacing(2, 4, 3),
    outline: "none",
  },
}));

export default function ContentModal({ children, id, media_type }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const MODAL_API = `https://api.themoviedb.org/3/${media_type}/${id}?api_key=2e19df2909e1c17b76487f7eb65aacbc&language=en-US`;
  const VIDEO_API = `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=2e19df2909e1c17b76487f7eb65aacbc&language=en-US`;


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    try {
      const res = await fetch(MODAL_API);
      const data = await res.json();
      setContent(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideo = async () => {
    try {
      const res = await fetch(VIDEO_API);
      const data = await res.json();
      setVideo(data.results[0]?.key);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <button
        type="button"
        className="button-img carousel-img"
        onClick={handleOpen}
      >
        {children}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (
            <div className={classes.paper}>
              <div className="content-modal">
                <img
                  className="content-modal_landscape"
                  src={
                    content.poster_path
                      ? `${img_300}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.title || content.name}
                />
                <div className="content-modal_about">
                  <div className="content-modal_title">
                    {content.title || content.name} (
                    {(
                      content.release_date ||
                      content.first_air_date ||
                      "----"
                    ).substring(0, 4)}
                    )
                  </div>
                  {content.tagline && (
                    <div className="tagline">"{content.tagline}"</div>
                  )}
                  <div className="content-modal_description">
                    {content.overview}
                  </div>
                  <div className="content-modal_buttons">
                    <a href={content.homepage} target="_blank" rel="noreferrer">
                      <button
                        className={
                          content.homepage
                            ? "button-netflix"
                            : "disabled-button"
                        }
                      >
                        <FontAwesomeIcon
                          icon={faPlay}
                          aria-hidden="true"
                          className="modal-icon"
                          color="#fff"
                        />
                        PLAY
                      </button>
                    </a>
                    <a
                      href={`https://www.youtube.com/watch?v=${video}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className={video? "button-youtube" : "disabled-button"}>
                        <FontAwesomeIcon
                          icon={faYoutube}
                          aria-hidden="true"
                          className="modal-icon"
                          color="red"
                        />
                        VIEW TRAILER
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </div>
  );
}
