import PropTypes from "prop-types";
import { Contacts, Item, Button } from "./ContactsList.styled";
import { IoPerson } from "react-icons/io5";
import { ImPhone } from "react-icons/im";

export const ContactsList = ({ contacts, onDeleteClick }) => {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <span>
              <IoPerson size={14} color="steelblue" />
              {name}:
            </span>

            <span>
              <ImPhone size={14} color="steelblue" />
              {number}
            </span>
            <Button type="button" onClick={() => onDeleteClick(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </Contacts>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
