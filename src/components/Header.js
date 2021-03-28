import { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="title">
          <h4>
            <span className="large">Mochakart</span>
            <br />
            <span className="small">
              Explore
              <span className="orange">
                Plus <i className="fa fa-plus"></i>
              </span>
            </span>
          </h4>
        </div>

        <div className="search">
          <input
            type="input"
            className="input-search"
            placeholder="Search for products, brands and more"
          />
          <button className="btn btn-search">
            <i className="fa fa-search"></i>
          </button>
        </div>

        <button className="btn btn-login">Login</button>
        <h4>
          More <i className="fa fa-angle-down large"></i>
        </h4>
        <h4>
          <i className="fa fa-shopping-cart large"></i> Cart
        </h4>
      </header>
    );
  }
}
