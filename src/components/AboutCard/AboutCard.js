import './about-card.scss';
import React from 'react';
import {BsDot} from 'react-icons/bs';
import {AiOutlineSmile} from 'react-icons/ai';
import {BiCodeAlt} from 'react-icons/bi';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';
import Gradient from '../Gradient/Gradient';
import FadeInSection from '../FadeInSection/FadeInSection';
import PropTypes from 'prop-types';

const AboutCard = ({about, index}) => {
  // icons object
  const shape = {
    aboutIcon: <AiOutlineInfoCircle className="icon" key={'aboutIcon'} />,
    me: <AiOutlineSmile className="icon" key={'me'} />,
    keywords: <BiCodeAlt className="icon" key={'keywords'} />,
    plans: <AiOutlineStar className="icon" key={'plans'} />,
  };

  /**
   * Goes trough about.json data
   */
  const aboutTitle = about.title;
  let aboutContent = about.content;
  const aboutShape = about.shape;
  const aboutLinkName = about.linkName;
  const aboutLink = about.link;

  /**
   * Prints out right icon that corresponds with json data
   */
  const myShape = Object.keys(shape).map((key) => {
    if (key !== aboutShape) {
      return shape[key.aboutShape];
    }
    return shape[key];
  });

  /**
   * if json text contains "/", splits from "/" and adds dot or else add empty row
   */
  if (index === 2) {
    aboutContent = aboutContent.split('/').map((step, index) =>
      index === 0 ? (
        <div className="card-dots" key={aboutTitle + index + Math.random()}>
          {step}
        </div>
      ) : (
        <div className="card-dots" key={aboutTitle + index + Math.random()}>
          {' '}
          <BsDot className="icon-dot" />
          {step}
        </div>
      )
    );
  } else {
    aboutContent = aboutContent.split('/').map((step, index) =>
      index === 0 ? (
        <div key={aboutTitle + index + Math.random()}>{step}</div>
      ) : (
        <div className="next-line" key={aboutTitle + index + Math.random()}>
          {' '}
          <br />
          {step}
        </div>
      )
    );
  }

  return (
    <FadeInSection>
      <div className="header-container">
        <div className="icon-wrapper">
          {myShape}
          <Gradient />
        </div>
        <div id="title-wrapper">
          <h2 className="card-title">{aboutTitle}</h2>
        </div>
      </div>
      <div className="card-content paragraph">
        {aboutContent}
        {aboutLink && (
          <a
            href={aboutLink}
            alt={aboutTitle}
            className="git-link"
            rel="noreferrer"
            target="_blank"
          >
            {aboutLinkName}
          </a>
        )}
      </div>
    </FadeInSection>
  );
};

AboutCard.propTypes = {
  about: PropTypes.object,
  index: PropTypes.number,
};

export default AboutCard;
