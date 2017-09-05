import React from 'react';


export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div>
        <h1>Body is Here!</h1>
      </div>
    );
  }
}
