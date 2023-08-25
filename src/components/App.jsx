import { useEffect } from 'react';
import { ContactForm } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, deleteContacts, selectContacts, selectFilter, setFilter } from 'redux/appReducer';
export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleAddContact = contact => {
    const { name } = contact;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContacts([...contacts, contact]));
  };
  useEffect(() => {
    if (contacts.length >= 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  useEffect(() => {
    const localStorageContacts = JSON.parse(
      window.localStorage.getItem('contacts')
    );
    if (localStorageContacts) {
      dispatch(addContacts(localStorageContacts));
    }
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContacts(contacts.filter(contact => contact.id !== id)));
  };
  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  const filterContacts = () => {
    if (filter === '') {
      return contacts;
    } else {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter onFilter={handleFilter} filter={filter} />
      <ContactList
        contacts={filterContacts()}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
