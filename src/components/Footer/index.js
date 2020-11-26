import React from "react";
import { StyledFooter, Container, AppInfoContainer, APIInfoContainer } from "./style";

const Footer = () => (
  <StyledFooter>
    <Container>
      <AppInfoContainer>
        <h2>Spider-Man Comics</h2>
        <h4>A React App by Jorge Segura</h4>
      </AppInfoContainer>
      <APIInfoContainer>
        <h3>Data provided by Marvel. © 2014 Marvel</h3>
      </APIInfoContainer>
    </Container>
  </StyledFooter>
);

export default Footer;
