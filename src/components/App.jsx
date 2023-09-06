
import { ContactsList } from './ContactList/ContactList';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';



export const App = () => {

    return<>
        <h1>Phonebook</h1>
        <Form/>

        <h2>Filter Contacts</h2>
        <Filter/>
        <ContactsList/>
      </>
    
}

