import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import Section from './components/Section';
import Statistics from './components/Statistics';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = event => {
    switch (event.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = function () {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = function () {
    return countTotalFeedback() === 0
      ? 0
      : Math.floor((good * 100) / countTotalFeedback());
  };

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onIncrement={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
