import { Avatar } from "../avatar";
import { ContactWrapper } from "./styles";

export const Contact = ({ id, name, phone }) => {
  return (
    <ContactWrapper>
      <Avatar />
      <div>{id}</div>
      <div>{name}</div>
      <div>{phone}</div>
    </ContactWrapper>
  );
};
