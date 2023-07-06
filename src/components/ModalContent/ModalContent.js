import './modal-content.scss';
import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

export default function ModalContent({worksVideo, onClose}) {
  const iframeUrl = worksVideo;
  const [iframSrc] = useState(iframeUrl);

  useEffect(() => {
    /**
     * Disable scrolll
     */
    disableBodyScroll(document);
  }, []);

  const handleClick = () => {
    enableBodyScroll(document);
    onClose();
  };

  return (
    <div className="video-modal">
      <iframe
        src={iframSrc}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="iframe-scale"
      ></iframe>
      <span
        className="modal__button"
        style={{display: 'none'}}
        onClick={handleClick}
      >
        Close
      </span>
    </div>
  );
}

ModalContent.propTypes = {
  worksVideo: PropTypes.string,
  onClose: PropTypes.any,
};
