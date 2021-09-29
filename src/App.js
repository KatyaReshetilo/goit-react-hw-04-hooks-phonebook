import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Section from './components/section/section';
import Form from './components/form/form';
import Contacts from './components/contacts/contacts';
import Filter from './components/filter/filter';

export default function App() {
  const [contacts, setContact] = useState([]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    const contacts = window.localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContact(s => (s = parsedContacts));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    return {
      id: uuidv4(),
      name,
      number,
    };
  };

  const handlerOnSubmit = ({ name, number }) => {
    const newContact = addContact({ name, number });
    const contactsNames = contacts.map(contact => contact.name);
    if (contactsNames.includes(name)) {
      alert(`${name} is already in contacts`);
    } else {
      setContact(s => [newContact, ...s]);
    }
  };

  const deleteContact = id => {
    setContact(s => s.filter(contact => contact.id !== id));
  };

  const doFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalize = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalize),
    );
  };
  return (
    <>
      <Section title="Phonebook">
        <Form onSubmit={handlerOnSubmit} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={doFilter} />
        <Contacts
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      </Section>
    </>
  );
}
