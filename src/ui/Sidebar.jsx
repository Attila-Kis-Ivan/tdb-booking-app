import { StyledSidebar } from "./Sidebar-styles";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      <Uploader />
    </StyledSidebar>
  );
};

export default Sidebar;
