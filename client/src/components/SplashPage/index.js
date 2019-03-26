import React from 'react';
import Title from '../Shared/Title';
import GButton from '../Shared/GreenButton';
import { AppDescription, FatherContainer,BContainer, Span } from './splashpage.style';

const Splash = () => (
<React.Fragment>
  <FatherContainer>
    <Title />
      <AppDescription>
        Ecommit makes it easy for you to trade your preloved items online. Simply upload images of your
        items & allow our app to generate the data needed to trade on.

<Span>Start by uploading a photo of your item</Span>
</AppDescription>
      <BContainer>
        <GButton action="START"/>
      </BContainer>
  </FatherContainer>
</React.Fragment>
);

export default Splash;
