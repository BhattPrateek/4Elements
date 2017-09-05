import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div>
        <Layout/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
