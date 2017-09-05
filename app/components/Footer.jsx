import React from 'react';


export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div>
        <h1>Footer is Here!</h1>
      </div>
    );
  }
}
