import PropTypes from "prop-types";
import styles from "./Contacts.module.css";

const Contacts = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <p className={styles.text}>{name} :</p>
          <p className={styles.text}>{number}</p>
          <button
            className={styles.button}
            onClick={() => {
              onDelete(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Contacts;
