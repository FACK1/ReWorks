import React from 'react';
import Title from '../Shared/Title';
import { AppDescription, FatherContainer,BContainer, Span, GButton } from './splashpage.style';

const clickedStart = (history) => {
  history.push("/upload-photo")
}
const Splash = (props) => (

<React.Fragment>
  <FatherContainer>
    <Title />
      <AppDescription>
        Ecommit makes it easy for you to trade your preloved items online. Simply upload images of your
        items & allow our app to generate the data needed to trade on.

<Span>Start by uploading a photo of your item</Span>
</AppDescription>
        <GButton action="START" onClick={clickedStart.bind(null, props.history)}>
          START
        </GButton>
  </FatherContainer>
</React.Fragment>
);

export default Splash;
