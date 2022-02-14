import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { quality: 'Dynamisme', text: 'Je me donne à fond pour réussir.', },
  { quality: 'Solidarité', text: 'Seul on va plus vite à plusieurs on va plus loin.', },
  { quality: 'Bienveillance', text: 'Toujours là pour donner un coup de main', },
  { quality: 'Humilité', text: 'Celui qui croit savoir n\'apprend plus', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Mes qualités</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.quality}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
