import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistic.module.css'

const Statistics = ({
  state,
  countPositiveFeedbackPercentage,
  countTotalFeedback,
}) => (
  <>
    <p className={styles.fieldStatistic}>Good: {state.good}</p>
    <p className={styles.fieldStatistic}>Neutral: {state.neutral}</p>
    <p className={styles.fieldStatistic}>Bad: {state.bad}</p>
    <p className={styles.fieldStatistic}>Total: {countTotalFeedback}</p>
    <p className={styles.fieldStatistic}>
      Positive feedback:
       {countPositiveFeedbackPercentage}%
    </p>
  </>
);
Statistics.propTypes = {
  state: PropTypes.object.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
};
export default Statistics;
