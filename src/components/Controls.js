import React from 'react';

const Controls = ({ options, onFeedbackClick }) => (
  <ul className="stats_list">
    {options.map(option => (
      <li className="stats_item" key={option}>
        <button
          type="button"
          name={option}
          onClick={() => onFeedbackClick(option)}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);
export default Controls;
