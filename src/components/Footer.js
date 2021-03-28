import { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <h5>
          <i className="orange fa fa-suitcase"></i> Sell on Mochakart
        </h5>
        <h5>
          <i className="orange fa fa-star"></i> Advertise
        </h5>
        <h5>
          <i className="orange fa fa-gift"></i> Gift Cards
        </h5>
        <h5>
          <i className="orange fa fa-question-circle"></i> Help Center
        </h5>
        <h5>
          <i className="orange fa fa-copyright"></i> 2021 MochaTek
        </h5>
      </footer>
    );
  }
}
