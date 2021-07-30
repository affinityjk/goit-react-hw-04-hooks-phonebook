import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { Label, Input } from "./Filter.styled";

export const Filter = ({ filter, onChange }) => {
  return (
    <>
      <Label htmlFor={`id-${nanoid(3)}`}>Find contacts by name</Label>
      <Input
        id={`id-${nanoid(3)}`}
        type="text"
        name="name"
        value={filter}
        onChange={onChange}
        placeholder="Search"
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
