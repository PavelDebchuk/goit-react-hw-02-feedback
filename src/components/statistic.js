import React from 'react';
import './statistic.components.css';
import Controls from './Controls';
import Value from './Value';

class Statistic extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  gradeGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  gradeNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  gradeBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    const countTotalFeedback =
      this.state.neutral + this.state.bad + this.state.good;
    const countPositiveFeedbackPercentage = Math.round(
      (100 / countTotalFeedback) * this.state.good
    );
    return (
      <div className="stats_block">
        <h1>Please leave feedback</h1>
        <Controls
          onGradeGood={this.gradeGood}
          onGradeNeutral={this.gradeNeutral}
          onGradeBad={this.gradeBad}
        />
        <h2>Statistic</h2>

        {countTotalFeedback ? (
          <Value
            onGood={this.state.good}
            onNeutral={this.state.neutral}
            onBad={this.state.bad}
            onTotal={countTotalFeedback}
            onFeedback={countPositiveFeedbackPercentage}
          />
        ) : (
          <p>There is no feedback</p>
        )}
      </div>
    );
  }
}

export default Statistic;
