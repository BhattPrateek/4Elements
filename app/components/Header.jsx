import React from 'react';


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div>
        <h1>Header is Here!</h1>
      </div>
    );
  }
}
