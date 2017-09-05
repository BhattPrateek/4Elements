import React from 'react';


export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
<nav className="navbar navbar-toggleable-sm navbar-light">
  <ul className="navbar-nav mx-auto">
    <li className="nav-item active text-center">
      <a className="nav-link" href="#">Artists</a>
    </li>
    <li className="divider"></li>
    <li className="nav-item text-center">
      <a className="nav-link" href="#">New Releases</a>
    </li>
    <li className="nav-item text-center">
      <a className="nav-link" href="#">Upcoming Shows</a>
    </li>
  </ul>
</nav>
    );
  }
}
