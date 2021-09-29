import PropTypes from 'prop-types';
import s from './contacts.module.css';
export default function Contacts({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} id={id} className={s.contactItem}>
            {name}: {number}
            <button
              className={s.delete}
              type="button"
              onClick={() => {
                onDeleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
Contacts.propTypec = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
