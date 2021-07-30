import PropTypes from "prop-types";
import { Component } from "react";
import { nanoid } from "nanoid";
import { Form, Input, Label, Button } from "./ContactsForm.styled";

export class ContactsForm extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, number } = this.state;
    this.props.onSubmit({ id: nanoid(3), name, number });

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    let nameInputId = nanoid(3);
    let telInputId = nanoid(3);

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={`id-${nameInputId}`}>Name</Label>
        <Input
          id={`id-${nameInputId}`}
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value={name}
          onChange={this.handleChange}
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
          onChange={this.handleChange}
          required
        />

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
