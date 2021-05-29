import styled from "styled-components";
import { secondary2 } from "../../styles/colors";

export const ContactListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${secondary2};
  min-height: calc(100vh - 148px);
  min-width: 400px;
  padding: 15px 25px 15px 25px;
`;
export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: calc(100vh - 148px);
`;
