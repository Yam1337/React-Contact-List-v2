import { Avatar } from "../avatar";
import {
  ContactWrapper,
  CheckBox,
  ContactDetails,
  CheckBoxWrapper,
  DetailsWrapper,
} from "./styles";

export const Contact = ({ id, name, phone }) => {
  return (
    <ContactWrapper>
      <ContactDetails>
        <Avatar />
        <DetailsWrapper>
          <div>{name}</div>
          <div>{phone}</div>
        </DetailsWrapper>
      </ContactDetails>
      <CheckBoxWrapper>
        <CheckBox type="checkbox" />
      </CheckBoxWrapper>
    </ContactWrapper>
  );
};
