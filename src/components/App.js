import { Component } from 'react';
import './App.css';
import Controls from './Controls';
import Value from './Value';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackClick = button => {
    this.setState({ [button]: this.state[button] + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return Math.round((100 / this.countTotalFeedback()) * good);
  };
  render() {
    return (
      <div className="stats_block">
        <h1>Please leave feedback</h1>
        <Controls
          options={['good', 'neutral', 'bad']}
          onFeedbackClick={this.feedbackClick}
        />
        <h2>Statistic</h2>

        {this.countTotalFeedback() ? (
          <Value
            onGood={this.state.good}
            onNeutral={this.state.neutral}
            onBad={this.state.bad}
            onTotal={this.countTotalFeedback()}
            onFeedback={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <p>There is no feedback</p>
        )}
      </div>
    );
  }
}

export default App;
