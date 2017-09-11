import React from 'react';


export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
        <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active">
      <img className="d-block img-fluid" src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/11986592_10206695942984500_2936854663346239267_n.jpg?oh=d7004973273016dfcb7c2521d1d68a68&oe=5A526187" alt="First slide">
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid" src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/11986592_10206695942984500_2936854663346239267_n.jpg?oh=d7004973273016dfcb7c2521d1d68a68&oe=5A526187" alt="Second slide">
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid" src="" alt="Third slide">
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

            <div className="card   overall">
             <img className="card-img-top img-responsive img-fluid" src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/11986592_10206695942984500_2936854663346239267_n.jpg?oh=d7004973273016dfcb7c2521d1d68a68&oe=5A526187" alt="Deer in nature" />
             <div className="card-block">
              <h4 className="card-title">Kombeze Ataie</h4>
              <h6 className="text-muted">Producer</h6>
              <p className="card-text">Tired of their servitude to man, a group of farm animals revolt and establish their own society, only to be betrayed into worse servitude by their leaders, the pigs. This satire addresses the communist philosophy the Soviet Union.</p>
              <a href="#" className="btn btn-primary">Read more</a>
             </div>
            </div>
    </div>

   
    );
  }
}
