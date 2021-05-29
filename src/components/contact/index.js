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
import React, { useState } from "react";

export const Contact = ({
  id,
  name,
  phone,
  activeContacts,
  setActiveContacts,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const onWrapperClick = () => {
    const newActiveContacts = toggleSelectedId(activeContacts, id);
    setActiveContacts(newActiveContacts);
    console.log(newActiveContacts);
    setIsChecked((prev) => !prev);
  };

  return (
    <ContactWrapper onClick={onWrapperClick}>
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
        <CheckBox type="checkbox" checked={isChecked} readOnly />
      </CheckBoxWrapper>
    </ContactWrapper>
  );
};
