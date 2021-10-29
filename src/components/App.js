import { useEffect, useState } from "react";
import { generate } from "shortid";
import styles from "./App.module.css";
import Section from "./Section";
import Form from "./Form";
import Contacts from "./Contacts";
import ContactsFilter from "./Contacts/ContactsFilter";

const App =()=> {
  const [contacts, setContacts] = useState 
    ([
      {
        id: generate(),
        name: "Rosie Simpson",
        number: "459-12-56",
      },
      {
        id: generate(),
        name: "Hermione Kline",
        number: "443-89-12",
      },
      {
        id: generate(),
        name: "Eden Clements",
        number: "645-17-79",
      },
      {
        id: generate(),
        name: "Annie Copeland",
        number: "227-91-26",
      },
    ]);
    const [filter, setFilter] = useState("");
    

  const addContact = ({ name, number }) => {
    const contact = {
      id: generate(),
      name,
      number,
    };
    contacts.find((contact) => contact.name === name)
      ? alert(`${name} is already in contacts`) : contacts.find((contact) => contact.number === number)
      ? alert(`${number} is already in contacts`) : setContacts((prevState) => {return[...prevState,contact]});
  };

  const deleteContact = (contactId) => {
    setContacts((prevState) => {return [...prevState].filter( (contact) => contact.id !== contactId );});
  };
 const  changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts
      .filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  useEffect(()=>{
    const localContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(localContacts);
    if (parsedContacts) {
      
    setContacts(
       [...parsedContacts]
      );
    }
  },[]) 

  useEffect(()=>{
      localStorage.setItem("contacts", JSON.stringify(contacts));
  },[contacts]);
  const visibleContacts = filterContacts();

    return (
      <>
        <Section title={"Phonebook"}>
          <Form onSubmit={addContact} />
        </Section>

        <Section title={"Contacts"}>
          <div className={styles.container}>
            <ContactsFilter value={filter} onChange={changeFilter} />
            <Contacts
              contacts={visibleContacts}
              onDelete={deleteContact}
            />
          </div>
        </Section>
      </>
    );
  }

  export default App;