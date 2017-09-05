import React from 'react';
import Navbar from './Navbar.jsx';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1>4 Elements</h1>
        </div>
      </div>
    );
  }
}
