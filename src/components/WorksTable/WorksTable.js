import './works-table.scss';
import dataFetch from '../../hooks/DataFetch/DataFetch';
import WorksRow from '../WorksRow/WorksRow';
import React from 'react';

const WorksTable = () => {
  const worksData = dataFetch('/data/works.json');

  /**
   * Goes trough works.json data
   */
  return (
    <div className="works">
      <h2>WORKS</h2>
      <div className="works-container">
        {worksData && worksData?.data.length > 0
          ? worksData?.data.map((works, index) => (
              <WorksRow key={works.title + index} works={works} index={index} />
            ))
          : 'No cards'}
      </div>
    </div>
  );
};

export default WorksTable;
