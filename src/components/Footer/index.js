import React from "react";
import { StyledFooter, Container, AppInfoContainer, APIInfoContainer, StyledText, Disclaimer } from "./style";

const Footer = () => (
  <StyledFooter>
    <Container>
      <AppInfoContainer>
        <StyledText>Spider-Man Comics</StyledText>
        <StyledText>A React App by Jorge Segura</StyledText>
      </AppInfoContainer>
      <APIInfoContainer>
        <Disclaimer>Data provided by Marvel. © 2014 Marvel</Disclaimer>
      </APIInfoContainer>
    </Container>
  </StyledFooter>
);

export default Footer;
