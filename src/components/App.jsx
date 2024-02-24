import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statitstics';
import style from './App.module.css';
import Notification from './Notification/Notification';
export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const handleLeaveFeedback = option =>
    setFeedback(prev => ({ ...prev, [option]: prev[option] + 1 }));
  const totalFeedback = Object.values(feedback).reduce(
    (acc, value) => acc + value,
    0
  );
  const positiveFeedbackPersent = (
    (feedback.good / totalFeedback) *
    100
  ).toFixed();
  return (
    <div className={style.container}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}></Section>
      {totalFeedback ? (
        <Statistics
          entries={Object.entries(feedback)}
          total={totalFeedback}
          positivePersentage={positiveFeedbackPersent}
        />
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
};
