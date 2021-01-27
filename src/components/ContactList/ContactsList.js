import { useSelector, useDispatch } from 'react-redux';
import actionsOperations from '../redux/contacts/contacts-operations';
import s from './Contacts.module.css';
import * as contactsSelectors from '../redux/contacts/contacts-selectors';

function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  return (
    <ul className={s.contactList}>
      {contacts &&
        contacts.map(c => {
          return (
            <li className={s.item} key={c.id}>
              <p className={s.contactItem}>
                <span>
                  <strong>{c.name}:</strong> {c.number}
                </span>
                <button
                  className="btn"
                  onClick={() =>
                    dispatch(actionsOperations.deleteContacts(c.id))
                  }
                >
                  Delete
                </button>
              </p>
            </li>
          );
        })}
    </ul>
  );
}

export default Contacts;
