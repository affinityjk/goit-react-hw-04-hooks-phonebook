import { useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { Form, Input, Label, Button } from "./ContactsForm.styled";

export function ContactsForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({ name, number });

    setName("");
    setNumber("");
  };

  let nameInputId = nanoid(3);
  let telInputId = nanoid(3);

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={`id-${nameInputId}`}>Name</Label>
      <Input
        id={`id-${nameInputId}`}
        type="text"
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={name}
        onChange={handleChange}
        required
      />

      <Label htmlFor={`id-${telInputId}`}>Number</Label>
      <Input
        id={`id-${telInputId}`}
        type="tel"
        name="number"
        placeholder="+38 (XXX) XXX-XX-XX"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        value={number}
        onChange={handleChange}
        required
      />

      <Button type="submit">Add contact</Button>
    </Form>
  );
}

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
