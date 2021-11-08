import PropTypes from 'prop-types';
import s from './FeedbackBtn.module.css';

const FeedbackBtn = ({ name = '', onIncrement }) => (
  <button className={s[name]} type="button" name={name} onClick={onIncrement}>
    {name}
  </button>
);

FeedbackBtn.propTypes = {
  name: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default FeedbackBtn;
