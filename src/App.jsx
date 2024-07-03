import { useState, useEffect } from 'react';
import Description from './components/Description/Description.jsx';
import Options from './components/Options/Options.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import Notification from './components/Notification/Notification.jsx';

const App = () => {
  const initialFeedbackState = JSON.parse(
    localStorage.getItem('feedbackTypes')
  ) || { good: 0, neutral: 0, bad: 0 };

  const [feedbackTypes, setFeedbackTypes] = useState(initialFeedbackState);

  useEffect(() => {
    localStorage.setItem('feedbackTypes', JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const updateFeedback = feedbackType => {
    setFeedbackTypes(prevFeedbackTypes => ({
      ...prevFeedbackTypes,
      [feedbackType]: prevFeedbackTypes[feedbackType] + 1,
    }));
  };

  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  const positiveFeedbackPercentage = Math.round(
    (feedbackTypes.good / totalFeedback) * 100
  );

  const resetFeedback = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackTypes={feedbackTypes}
          totalFeedback={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="No feedback yet." />
      )}
    </>
  );
};

export default App;
