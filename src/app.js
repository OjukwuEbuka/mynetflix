import React from 'react';
import { Faqscontainer } from './containers/faqs';
import { FooterContainer } from './containers/footer';
import {JumbotronContainer} from './containers/jumbotron';

function App() {
  return (
    <>
      <JumbotronContainer />
      <Faqscontainer />
      <FooterContainer />
    </>
  );
}

export default App;
