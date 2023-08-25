import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectName, selectNumbers, setName, setNumbers } from 'redux/formReducer';
export const ContactForm = ({ onAddContact }) => {
  ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };
  const name = useSelector(selectName);
  const numbers = useSelector(selectNumbers);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const id = nanoid(5);
    onAddContact({ id, name, numbers });
    dispatch(setName(''));
    dispatch(setNumbers(''));
  };

  const handleChange = event => {
    if (event.target.name === 'name') {
      dispatch(setName(event.target.value) );
    } else if (event.target.name === 'number') {
      dispatch(setNumbers(event.target.value) );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={numbers}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
