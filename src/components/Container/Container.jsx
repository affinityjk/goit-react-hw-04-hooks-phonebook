import PropTypes from "prop-types";
import { StyledWrapper } from "./Container.styled";

export const Container = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
