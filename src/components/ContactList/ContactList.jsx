// import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
import { ContactListComponent } from './ContactList.styled';
import { Contact } from '../Contact/Contact';


export const ContactList = () => {
  const contacts = useSelector(getContacts);

  // const stateFilter = useSelector(getFilter);

  // const normalizedFilter = stateFilter.toLowerCase();

  // const filtred = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  // );
  return (
    <ContactListComponent>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          />
      ))}
    </ContactListComponent>
  );
};



// ========================== варіант css-модулі ==================

// import PropTypes from 'prop-types';
// import { Contact } from '../Contact/Contact';
// import css from './ContactList.module.css';

// export const ContactList = ({ contacts, deleteContact }) => {
//   return (
//     <ul className={css.contactList}>
//       {contacts.map(contact => (
//         <Contact
//           key={contact.id}
//           id={contact.id}
//           name={contact.name}
//           number={contact.number}
//           deleteContact={deleteContact}
//         />
//       ))}
//     </ul>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };
