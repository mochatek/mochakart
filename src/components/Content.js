import { Component } from "react";
import Filters from "./Filters";
import Products from "./Products";

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      filteredProducts: [],
      filters: [],
    };

    this.toggleFilter = this.toggleFilter.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }

  async componentDidMount() {
    const response = await fetch("https://fakestoreapi.com/products");
    let products = await response.json();

    const category_items = [
      ...new Set(products.map((product) => product.category)),
    ].map((category) => {
      return { name: category, applied: false };
    });
    const rating_items = [4, 3, 2, 1].map((rating) => {
      return { name: `${rating}★ & above`, applied: false };
    });

    const filters = [
      { name: "category", items: category_items },
      { name: "rating", items: rating_items },
    ];

    products = products.map((prod) => ({
      ...prod,
      rating: Math.floor(Math.random() * 5 + 1),
    }));

    this.setState({
      products,
      filteredProducts: products,
      filters,
    });
  }

  toggleFilter(filterIndex, itemIndex) {
    const filters = this.state.filters.slice();
    filters[filterIndex].items[itemIndex].applied = !filters[filterIndex].items[
      itemIndex
    ].applied;

    this.setState({ filters });

    const filteredRatings = filters[1].items.filter(
      (item) => item.applied === true
    );
    let minRating = 0;
    if (filteredRatings.length) {
      minRating = Math.min(
        ...filteredRatings.map((item) => +item.name.split("★")[0])
      );
    }

    const filteredCategories = filters[0].items.filter(
      (item) => item.applied === true
    );

    if (filteredCategories.length) {
      const categories = filteredCategories.map((item) => item.name);
      const filteredProducts = this.state.products.filter(
        (product) =>
          categories.includes(product.category) && product.rating >= minRating
      );

      this.setState({ filteredProducts });
    } else {
      this.setState({
        filteredProducts: this.state.products.filter(
          (product) => product.rating >= minRating
        ),
      });
    }
  }

  clearFilters() {
    const filters = this.state.filters.slice();
    filters.forEach((filter) => {
      filter.items.forEach((item) => (item.applied = false));
    });

    this.setState({ filters, filteredProducts: this.state.products });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <main className="content">
        <Filters
          filters={this.state.filters}
          toggleHandler={this.toggleFilter}
          clearHandler={this.clearFilters}
        />
        <Products products={this.state.filteredProducts} />
      </main>
    );
  }
}
