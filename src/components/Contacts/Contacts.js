import { Component } from 'react';
import Filter from './Filter';
import ContactList from './ContactList';
import styles from './styles.module.scss';

class Contacts extends Component {
  state = {
    filter: '',
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  render() {
    const { filter } = this.state;
    const { contacts } = this.props;

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <div>
        <Filter value={filter} onChange={this.changeFilter} />
        <ul className={styles.list}>
          {filteredContacts.map(contact => (
            <ContactList
              contact={contact}
              key={contact.id}
              onContactDelete={this.props.onContactDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Contacts;
