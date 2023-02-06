import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.statList}>
      <li className={s.statItem}>Good: {good}</li>
      <li className={s.statItem}>Neutral: {neutral}</li>
      <li className={s.statItem}>Bad: {bad}</li>
      <li className={s.statItem}>Total: {total()}</li>
      <li className={s.statItem}>Positive feedback: {positivePercentage()}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
};

export default Statistics;
