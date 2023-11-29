import { NavList, StledNavLink } from "./MainNav-Style";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

const MainNav = () => {
  return (
    <nav>
      <NavList>
        <li>
          <StledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StledNavLink>
        </li>
        <li>
          <StledNavLink to="/bookings">
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StledNavLink>
        </li>
        <li>
          <StledNavLink to="/cabins">
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StledNavLink>
        </li>
        <li>
          <StledNavLink to="/users">
            <HiOutlineUsers />
            <span>Users</span>
          </StledNavLink>
        </li>
        <li>
          <StledNavLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StledNavLink>
        </li>
      </NavList>
    </nav>
  );
};

export default MainNav;
