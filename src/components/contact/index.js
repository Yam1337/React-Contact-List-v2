import { Avatar } from "../avatar";
import {
  ContactWrapper,
  CheckBox,
  ContactDetails,
  CheckBoxWrapper,
  DetailsWrapper,
  PhoneWrapper,
} from "./styles";
import PhoneIcon from "../../assets/icons/phone.svg";
import { toggleSelectedId } from "./utils/toggleSelectedId";

export const Contact = ({
  id,
  name,
  phone,
  activeContacts,
  setActiveContacts,
}) => {
  return (
    <ContactWrapper
      onClick={() => {
        setActiveContacts(toggleSelectedId(activeContacts, id));
      }}
    >
      <ContactDetails>
        <Avatar />
        <DetailsWrapper>
          <div>{name}</div>
          <PhoneWrapper>
            <img src={PhoneIcon} alt="phone icon" />
            <div>{phone}</div>
          </PhoneWrapper>
        </DetailsWrapper>
      </ContactDetails>
      <CheckBoxWrapper>
        <CheckBox type="checkbox" />
      </CheckBoxWrapper>
    </ContactWrapper>
  );
};
