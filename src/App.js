import React, { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerUpdateFeedback = type => {
    this.setState(state => {
      return {
        [type]: state[type] + 1,
      };
    });
  };

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }
  countPositiveFeedbackPercentage(total) {
    const positiveFeedback = Math.round((this.state.good / total) * 100);
    return positiveFeedback;
  }

  render() {
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions onLeaveFeedback={this.handlerUpdateFeedback} />
        </Section>
        <Section title={'Statistics'}>
          {total > 0 ? (
            <Statistics
              state={this.state}
              countTotalFeedback={this.countTotalFeedback()}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage(
                this.countTotalFeedback(),
              )}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
