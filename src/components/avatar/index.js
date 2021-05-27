import AvatarPlaceholder from "../../assets/icons/profile.svg";
import { AvatarWrapper } from "./styles";

export const Avatar = () => {
  return (
    <AvatarWrapper>
      <img src={AvatarPlaceholder} alt="user avatar" />
    </AvatarWrapper>
  );
};
