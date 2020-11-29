import React, { useContext } from "react";
import { AppContext } from "./../../App";
import { Container, ExternalLink, HomeButton, StyledIcon } from "./style";
import SpiderIcon from "../../assets/svg/spider-icon.svg";

const Header = () => {
  const { setLoadingBarProgress } = useContext(AppContext);

  return (
    <Container>
      <ExternalLink to="/">
        <StyledIcon src={SpiderIcon} alt={"Spider-man icon"} />
        <HomeButton onClick={() => setLoadingBarProgress(50)}>HOME</HomeButton>
      </ExternalLink>
    </Container>
  );
};

export default Header;
