import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenue sur<br />
        Mon Portfolio
      </SectionTitle>
      <SectionText>
        Développeur passionné de nouvelles technologies et d'informatique.
        Passionné d'univers fantastiques, de jeux de rôles et de jeux vidéos. 
        Breton 100% pur beurre.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/StevenLignereux'} >En savoir plus</Button>
    </LeftSection>
  </Section>
);

export default Hero;