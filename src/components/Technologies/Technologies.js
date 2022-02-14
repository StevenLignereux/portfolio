import React from 'react';
import { DiCode, DiDatabase, DiDocker, DiFirebase, DiPhp, DiReact, DiSymfony, DiSymfonyBadge, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Voici les différents langages et frameworks que j'utilise pour mes projets.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={"3rem"} />
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>
            Utilisation de <br />
            React, Vue...
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiSymfonyBadge size={"3rem"} />
        <ListContainer>
          <ListTitle>Back End</ListTitle>
          <ListParagraph>
            Utilisation de frameworks <br />
            Symfony, Laravel...
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size={"3rem"} />
        <ListContainer>
          <ListTitle>Autres Outils</ListTitle>
          <ListParagraph>
            Utilisation d'autres outils <br />
            Docker, PHPUnit...
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
