import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import Notification from 'components/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total()) {
    return (
      <ul className={s.statList}>
        <li className={s.statItem}>Good: {good}</li>
        <li className={s.statItem}>Neutral: {neutral}</li>
        <li className={s.statItem}>Bad: {bad}</li>
        <li className={s.statItem}>Total: {total()}</li>
        <li className={s.statItem}>
          Positive feedback: {positivePercentage()}%
        </li>
      </ul>
    );
  } else {
    return <Notification message="There is no feedback" />;
  }
};

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
};

export default Statistics;
