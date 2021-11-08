import PropTypes from 'prop-types';
import s from './StatisticsElement.module.css';

const StatisticsElement = ({ name, value }) => {
  return (
    <div className={s.wrapper}>
      <span className={s.name}>
        {name === 'positivePercentage' ? 'positive feedback' : name}:&nbsp;
      </span>
      <span className={s.value}>
        {value}
        {name === 'positivePercentage' && '%'}
      </span>
    </div>
  );
};

StatisticsElement.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default StatisticsElement;
