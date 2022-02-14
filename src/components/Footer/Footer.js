import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Téléphone</LinkTitle>
          <LinkItem href='tel:+33635559484'>+33 6 35 55 94 84</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:sligne@gmail@gmail.com'>slignere@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>2022 - Steven Lignereux</Slogan>
        </CompanyContainer>
        <SocialIconsContainer>
          <SocialIcons href={"https://github.com/StevenLignereux"}>
                <AiFillGithub size={"3rem"}/>
            </SocialIcons>
            <SocialIcons href={"https://www.linkedin.com/in/stevenlignereux/"}>
                <AiFillLinkedin size={"3rem"}/>
            </SocialIcons>
            <SocialIcons href={"https://twitter.com/StevenLignereux"}>
                <AiFillTwitterCircle size={"3rem"}/>
            </SocialIcons>
        </SocialIconsContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
