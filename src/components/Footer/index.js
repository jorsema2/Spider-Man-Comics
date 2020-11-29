import React from "react";
import {
  StyledFooter,
  Container,
  AppInfoContainer,
  APIInfoContainer,
  AppTitle,
  AppDescription,
  Disclaimer,
} from "./style";

const Footer = () => (
  <StyledFooter>
    <Container>
      <AppInfoContainer>
        <AppTitle>SPIDER-MAN COMICS</AppTitle>
        <AppDescription>A React App by Jorge Segura</AppDescription>
      </AppInfoContainer>
      <APIInfoContainer>
        <Disclaimer>Data provided by Marvel. © 2014 Marvel</Disclaimer>
      </APIInfoContainer>
    </Container>
  </StyledFooter>
);

export default Footer;
