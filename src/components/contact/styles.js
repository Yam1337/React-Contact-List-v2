import styled from "styled-components";
import { secondary, secondary1 } from "../../styles/colors";

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${secondary};
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

  & > *:first-child {
    color: red;
  }

  & > *:nth-child(2) {
    color: green;
  }
`;
