import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import inititalState from './initialState';

const App = () => {
  const [state, setState] = useState({ ...inititalState });
  const { good, neutral, bad } = state;

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const onLeaveFeedback = type => {
    setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={Object.keys(state)}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default App;
