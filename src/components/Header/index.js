import React from "react";
import { Container, ExternalLink, HomeButton, StyledIcon } from "./style";
import SpiderIcon from "../../assets/svg/spider-icon.svg";

const Header = () => {
  return (
    <Container>
      <ExternalLink to="/">
        <StyledIcon src={SpiderIcon} alt={"Spider-man icon"} />
        <HomeButton>Home</HomeButton>
      </ExternalLink>
    </Container>
  );
};

export default Header;
