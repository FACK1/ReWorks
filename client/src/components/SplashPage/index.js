import React from 'react';
import Title from '../Shared/Title';
import GButton from '../Shared/GreenButton';
import Footer from '../Shared/Footer';
import { AppDescription } from './splashpage.style';

const Splash = () => (
  <React.Fragment>
    <Title />
    <AppDescription>
      Ecomit makes it easy for you to trade your preloved items online. Simply upload images of your
      items & allow our app to generate the data needed to trade on.
    </AppDescription>
    <AppDescription>Start by uploading a photo of your item</AppDescription>
    <GButton action="START" center />
    <Footer />
  </React.Fragment>
);

export default Splash;
