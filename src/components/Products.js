import { Component } from "react";
import Product from "./Product";

export default class Products extends Component {
  render() {
    return (
      <section className="products">
        {this.props.products.length ? (
          <>
            <div className="filter-text">
              <p>
                Showing 1 - {this.props.products.length} of{" "}
                {this.props.products.length} results
              </p>
            </div>
            {this.props.products.map((product) => (
              <Product
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                rating={product.rating}
              />
            ))}
          </>
        ) : null}
      </section>
    );
  }
}
