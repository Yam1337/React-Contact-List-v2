import styled from "styled-components";
import { secondary1, secondary2 } from "../../styles/colors";

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 3px 2px 6px ${secondary1};
  background-color: ${secondary2};
  width: 80px;
  height: 80px;

  & > img {
    display: flex;
    height: 80%;
  }
`;
