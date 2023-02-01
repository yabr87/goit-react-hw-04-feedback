import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  console.log();
  return (
    <ul className={s.btnList}>
      {options.map((option, i) => {
        return (
          <li key={i} className={s.btnItem}>
            <button
              onClick={() => onLeaveFeedback(option)}
              className={s.btn}
              type="button"
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;
