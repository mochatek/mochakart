import { Component } from "react";

export default class Product extends Component {
  render() {
    const rating_count = Math.floor(Math.random() * 1000);
    const price = (this.props.price * 65).toFixed(2);
    const offer = [25, 33, 50, 60, 75, 80].sort(() => 0.5 - Math.random())[0];
    const mrp = ((this.props.price * 100) / (100 - offer)).toFixed(2);

    return (
      <div className="product">
        <img src={this.props.image} alt={this.props.title} />
        <p className="shorten">{this.props.title}</p>
        <p className="small grey shorten">{this.props.description}</p>
        <h6>
          <span className="product-rating">
            {this.props.rating} <i className="fa fa-star"></i>
          </span>
          <span className="light grey">({rating_count})</span>
        </h6>
        <h6 className="product-price">
          <span className="medium">₹ {price}</span>
          <span className="grey light strike">₹ {mrp}</span>
          <span className="green medium">{offer}% off</span>
        </h6>
      </div>
    );
  }
}
