import { Component, Fragment } from "react";
import Filter from "./Filter";
import AppliedFilters from "./AppliedFilters";

export default class Filters extends Component {
  render() {
    return (
      <section className="filter">
        <section id="appliedFilters">
          <h4>
            <span className="medium">Filters</span>
            <span className="clear" onClick={this.props.clearHandler}>
              CLEAR All
            </span>
          </h4>
          <AppliedFilters
            filters={this.props.filters}
            toggleHandler={this.props.toggleHandler}
          />
        </section>
        {this.props.filters.length ? (
          <>
            {this.props.filters.map((filter, index) => {
              return (
                <Fragment key={index}>
                  <Filter
                    id={index}
                    name={filter.name}
                    items={filter.items}
                    toggleHandler={this.props.toggleHandler}
                  />
                </Fragment>
              );
            })}
          </>
        ) : null}
      </section>
    );
  }
}
