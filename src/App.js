import { Component } from 'react';

import Form from './components/Form/Form';
import Container from './components/Container/Container';
import Contacts from './components/Contacts/Contacts';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [],
    // name: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = {
      name,
      number,
      id: shortid.generate(),
    };

    const isContactInList = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (isContactInList) {
      alert('is already in contacts');
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts].sort((first, second) => {
        if (first.name < second.name) {
          return -1;
        } else if (first.name > second.name) {
          return 1;
        }
        return 0;
      }),
    }));
  };

  contactDelete = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Contacts contacts={this.contacts} contactDelete={this.contactDelete} />
      </Container>
    );
  }
}

export default App;
