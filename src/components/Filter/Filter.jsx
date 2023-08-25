import PropTypes from 'prop-types';

export const Filter = ({onFilter, filter}) => {
    return (
      <label>
        Find contacts by name
        <input type="text" onChange={onFilter} value={filter}  />
      </label>
    );
  
}
Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};