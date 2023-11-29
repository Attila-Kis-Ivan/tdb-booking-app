import { StyledSidebar } from "./Sidebar-styles";
import Logo from "./Logo";
import MainNav from "./MainNav";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
};

export default Sidebar;
