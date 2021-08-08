import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const ContactList = ({ contact, contactDelete }) => {
  return (
    <li className={styles.item}>
      {contact.name} : {contact.number}
      <button onClick={() => contactDelete(contact.id)} type="button">
        Delete
      </button>
    </li>
  );
};

ContactList.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onContactDelete: PropTypes.func.isRequired,
};

ContactList.defaultProps = {
  contact: {
    name: 'Component do not include',
    number: '***-***-***',
  },
};

export default ContactList;
