const Feedback = ({
  feedbackTypes,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <ul>
      <li>Good: {feedbackTypes.good}</li>
      <li>Neutral: {feedbackTypes.neutral}</li>
      <li>Bad: {feedbackTypes.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedbackPercentage}%</li>
    </ul>
  );
};

export default Feedback;
