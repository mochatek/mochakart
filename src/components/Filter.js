import { Component, Fragment } from "react";

export default class Filter extends Component {
  render() {
    return (
      <section id={`${this.props.name}-filter`}>
        <h4 className="upper">{this.props.name}</h4>
        {this.props.items.map((item, index) => {
          return (
            <Fragment key={item.name}>
              <input
                type="checkbox"
                id={item.name}
                onClick={() => this.props.toggleHandler(this.props.id, index)}
                onChange={() => {}}
                checked={item.applied}
              />
              <label htmlFor={item.name}>{item.name}</label>
              <br />
            </Fragment>
          );
        })}
      </section>
    );
  }
}
