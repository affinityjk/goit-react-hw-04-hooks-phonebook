import styled from "@emotion/styled/macro";

export const Contacts = styled.ul`
  margin-top: 20px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  border: 1px solid silver;
  overflow: hidden;
  border-radius: 5px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  & span {
    display: inline-flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 40px;
  }

  & svg {
    margin-right: 5px;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;

  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: steelblue;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  text-transform: capitalize;

  &:hover,
  &:focus {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  }
`;
