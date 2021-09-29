import PropTypes from 'prop-types';
import s from './filter.module.css';
export default function Filter({ value, onChange }) {
  return (
    <label>
      <h3 className={s.headFilter}>Find contacts by name</h3>
      <input
        className={s.inputFilter}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
