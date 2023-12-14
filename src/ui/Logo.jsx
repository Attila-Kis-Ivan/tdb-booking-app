import { useDarkMode } from "../context/DarkModeContext";
import { StyledLogo, Img } from "./Logo-Style";

const Logo = () => {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
};

export default Logo;
