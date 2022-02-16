import React from 'react';

const Controls = ({ onGradeGood, onGradeNeutral, onGradeBad }) => (
  <ul className="stats_list">
    <li className="stats_item">
      <button type="button" onClick={onGradeGood}>
        good
      </button>
    </li>
    <li className="stats_item">
      <button type="button" onClick={onGradeNeutral}>
        neutral
      </button>
    </li>
    <li className="stats_item">
      <button type="button" onClick={onGradeBad}>
        bad
      </button>
    </li>
  </ul>
);

export default Controls;
