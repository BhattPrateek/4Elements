import React from 'react';

import Body from './Body.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';


export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}
