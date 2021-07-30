import { useState, useEffect } from "react";
import { Container } from "components/Container/Container";
import { ContactsForm } from "components/Form/ContactsForm";
import { ContactsList } from "components/Contacts/ContactsList";
import { Section } from "components/Section/Section";
import { Filter } from "components/Filter/Filter";

export default function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    contacts.some(({ name }) => name === newContact.name)
      ? alert(`Contact ${newContact.name} already exists`)
      : setContacts([newContact, ...contacts]);
  };

  const deleteContact = (contactId) => {
    setContacts((contacts) =>
      contacts.filter((contact) => contact.id !== contactId)
    );
  };

  const handleFilterChange = (event) => setFilter(event.target.value);

  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizeFilter) ||
        contact.number.includes(normalizeFilter)
    );
  };

  const filtered = filteredContacts();

  return (
    <Container>
      <Section title="Phonebook">
        <ContactsForm onSubmit={addContact} />
      </Section>

      <Section title="Contacts">
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactsList contacts={filtered} onDeleteClick={deleteContact} />
      </Section>
    </Container>
  );
}
