import React from 'react';

const Value = ({ onGood, onNeutral, onBad, onTotal, onFeedback }) => (
  <ul className="resalt_list">
    <li className="resalt_item">
      <p>
        good:
        <span id="good">{onGood}</span>
      </p>
    </li>
    <li className="resalt_item">
      <p>
        neutral:
        <span id="neutral">{onNeutral}</span>
      </p>
    </li>
    <li className="resalt_item">
      <p>
        bad:
        <span id="bad">{onBad}</span>
      </p>
    </li>
    <li className="resalt_item">
      <p>
        total:<span id="total">{onTotal}</span>
      </p>
    </li>
    <li className="resalt_item">
      <p>
        positive feedback:
        <span id="feedback">{onFeedback ? onFeedback : 0}%</span>
      </p>
    </li>
  </ul>
);

export default Value;
