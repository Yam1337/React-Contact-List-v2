import styled from "styled-components";
import { secondary2, secondary4 } from "../../styles/colors";

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${secondary2};
  min-width: 80px;
  width: 80px;
  min-height: 80px;
  height: 80px;

  & > img {
    display: flex;
    height: 70%;
  }
`;
