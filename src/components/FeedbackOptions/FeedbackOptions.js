import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <>
    <button
      type="submit"
      className={styles.button}
      onClick={() => onLeaveFeedback('good')}
    >
      Good
    </button>
    <button
      type="submit"
      className={styles.button}
      onClick={() => onLeaveFeedback('neutral')}
    >
      Neutral
    </button>
    <button
      type="submit"
      className={styles.button}
      onClick={() => onLeaveFeedback('bad')}
    >
      Bad
    </button>
  </>
);
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
