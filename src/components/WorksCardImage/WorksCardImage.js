import './works-card-image.scss';
import React from 'react';
import {FaLink} from 'react-icons/fa';
import {BsEyeFill} from 'react-icons/bs';
import {useState} from 'react';
import {createPortal} from 'react-dom';
import ModalContent from '../ModalContent/ModalContent';
import PropTypes from 'prop-types';

const WorksCardImage = ({works}) => {
  const [showModal, setShowModal] = useState(false);

  /**
   * Goes trough works.json data
   */
  const worksTitle = works.title;
  const worksImg = works.image;
  const workslinkToPage = works.linkToPage;
  const worksVideo = works.linkToVideo;

  /**
   * @return {boolean}
   * adds different layout pattern to the work-cards: layout1 or layout2
   */
  return (
    <div className="works-img">
      {worksVideo && (
        <>
          <a onClick={() => setShowModal(true)}>
            <img src={worksImg} alt={worksTitle}></img>
            <div className="overlay">
              <div className="text-eye">
                <BsEyeFill />
              </div>
              <div className="text">Look</div>
            </div>
          </a>
          {showModal &&
            createPortal(
              <ModalContent
                worksVideo={worksVideo}
                onClose={() => setShowModal(false)}
              />,
              document.body
            )}
        </>
      )}
      {workslinkToPage && (
        <a
          href={workslinkToPage}
          alt={worksTitle}
          rel="noreferrer"
          target="_blank"
          className="paragraph"
        >
          <img src={worksImg} alt={worksTitle}></img>
          <div className="overlay">
            <div className="text-link">
              <FaLink />
            </div>
            <div className="text">Link</div>
          </div>
        </a>
      )}
    </div>
  );
};

WorksCardImage.propTypes = {
  works: PropTypes.object,
};

export default WorksCardImage;
