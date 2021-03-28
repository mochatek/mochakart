import { Component, Fragment } from "react";

export default class AppliedFilters extends Component {
  render() {
    const appliedFilters = [];
    this.props.filters.forEach((filter, filterIndex) => {
      filter.items.forEach((item, itemIndex) => {
        if (item.applied) {
          appliedFilters.push([filterIndex, itemIndex, item.name]);
        }
      });
    });

    return appliedFilters.length ? (
      <ul className="applied-filters">
        {appliedFilters.map((item) => {
          const [filterIndex, itemIndex, itemName] = item;
          return (
            <Fragment key={itemName}>
              <li
                onClick={() => this.props.toggleHandler(filterIndex, itemIndex)}
              >
                X&nbsp;&nbsp;{itemName}
              </li>
            </Fragment>
          );
        })}
      </ul>
    ) : null;
  }
}
