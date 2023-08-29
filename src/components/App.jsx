import { useState, useEffect } from 'react';
import { ContactsList } from './ContactList/ContactList';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';

const LOCALSTORAGE_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

 

  const hendleSubmit = newContact => {
    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    )
    if (isExist) {
      alert('контакт уже существует');
      return;
    }
    setContacts(prevState => [...prevState, newContact]
      
    )
  };

  const hendleDelitContact = contactId => {
    setContacts(prevState =>
      prevState.filter(({id}) => id !== contactId)
    );
  };

  const hendleFilterdContacts = event => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => contacts.filter(({name})=>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  

    const FilteredContact = getFilteredContacts();
    return<>
        <h1>Phonebook</h1>
        <Form onSubmit={hendleSubmit} />

        <h2>Filter Contacts</h2>
        <Filter filterContact={hendleFilterdContacts} />
        <ContactsList
          contacts={FilteredContact}
          deleteContacts={hendleDelitContact}
        />
      </>
    
}

