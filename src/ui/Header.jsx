import Logout from "../features/authentication/Logout";
import { StyledHeader } from "./Header-styles";

const Header = () => {
  return (
    <StyledHeader>
      <Logout />
    </StyledHeader>
  );
};

export default Header;
