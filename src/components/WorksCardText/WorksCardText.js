import './works-card-text.scss';
import React from 'react';
import EnterLeftSection from '../EnterLeftSection/EnterLeftSection';
import EnterRightSection from '../EnterRightSection/EnterRightSection';
import PropTypes from 'prop-types';

const WorksRow = ({works, index}) => {
  /**
   * Goes trough works.json data
   */
  const worksTitle = works.title;
  let worksContent = works.content;
  const worksLinkName = works.linkName;
  const worksLink = works.link;

  /**
   * if json text contains "/", splits from "/" and adds empty row
   */
  worksContent = worksContent.split('/').map((step) => (
    <div key={index + Math.random()}>
      {' '}
      <br />
      {step}
    </div>
  ));

  /**
   * @return {boolean}
   * adds different layout pattern to the work-cards: layout1 or layout2
   */
  return (
    <div className="works-card">
      <div className="works-inside">
        {index % 2 === 0 ? (
          <EnterRightSection key={'EnterRightSection' + index}>
            <h3>{worksTitle}</h3>
          </EnterRightSection>
        ) : (
          <EnterLeftSection key={'EnterLeftSection' + index}>
            <h3>{worksTitle}</h3>
          </EnterLeftSection>
        )}
        <div className="paragraph">{worksContent}</div>
        {worksLink && (
          <a
            href={worksLink}
            alt={worksTitle}
            rel="noreferrer"
            target="_blank"
            className="paragraph"
          >
            {worksLinkName}
          </a>
        )}
      </div>
    </div>
  );
};

WorksRow.propTypes = {
  works: PropTypes.object,
  index: PropTypes.number,
};

export default WorksRow;
