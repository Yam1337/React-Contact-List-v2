import styled from "styled-components";
import {
  secondary,
  secondary1,
  secondary3,
  secondary4,
} from "../../styles/colors";

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${secondary};
  /* box-shadow: 3px 2px 6px ${secondary4}; */
  width: 100%;
  padding: 0px 14px 0px 14px;
  height: 100px;
  border-radius: 12px;
  margin-bottom: 8px;
  &:active {
    background-color: ${secondary1};
    transition: 0.5s;
  }
`;

export const CheckBox = styled.input`
  padding: 5px;
`;

export const ContactDetails = styled.div`
  display: flex;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;

  & > *:first-child {
    font-size: 26px;
    color: ${secondary3};
  }

  & > *:nth-child(2) {
    font-size: 16px;
    color: #000000;
  }
`;

export const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  & > img {
    display: flex;
    height: 20px;
    margin-right: 5px;
  }
`;
