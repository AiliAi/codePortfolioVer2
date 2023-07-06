import './works-row.scss';
import React from 'react';
import WorksCardImage from '../WorksCardImage/WorksCardImage';
import WorksCardText from '../WorksCardText/WorksCardText';
import PropTypes from 'prop-types';

const WorksRow = ({works, index}) => {
  /**
   * Goes trough works.json data
   */
  const worksTitle = works.title;

  /**
   * @return {boolean}
   * adds different layout pattern to the work-cards: layout1 or layout2
   */
  if (index % 2 === 0) {
    return (
      <div key={worksTitle} className="layout1">
        <WorksCardImage works={works} />
        <WorksCardText works={works} index={index} />
      </div>
    );
  } else {
    return (
      <div key={worksTitle} className="layout2">
        <WorksCardText works={works} index={index} />
        <WorksCardImage works={works} />
      </div>
    );
  }
};

WorksRow.propTypes = {
  works: PropTypes.object,
  index: PropTypes.number,
};

export default WorksRow;
