import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addcontact } from 'redux/contactsSlice';


export const Form = () => {

    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

  const [contactName, setcontactName] = useState('');
  const [number, setNumber] = useState('');

  const hendleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setcontactName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const hendleSubmit = event => {
    event.preventDefault();

       if (contacts.some(({ name }) => name === contactName)) {
         window.alert(`${contactName} is already in your contacts`);
         return;
       }
    
  dispatch(
    addcontact({
      name: contactName,
      number,
      id: nanoid(),
    })
  );

    setcontactName('');
    setNumber('');
  };

  return (
    <form onSubmit={hendleSubmit}>
      <h2>Phoneboock</h2>
      <label>
        Name
        <input
          onChange={hendleChange}
          value={contactName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <br />
      <label>
        Number
        <input
          onChange={hendleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <button type="submit">Add contact</button>
    </form>
  );
};

