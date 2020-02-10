import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
  constructor() {
    super();
    this.onLabelChange = this.onLabelChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      label: ``
    };
  }

  onLabelChange(evt) {
    this.setState({
        label: evt.target.value
    });
  };

  onSubmit(evt) {
    evt.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ``
    });
  }

  render() {
    return (
      <form
        className="item-add-form d-flex"
        onSubmit={this.onSubmit}
      >
        <input
          className="form-control"
          type="text"
          onChange={this.onLabelChange}
          placeholder="What need to be done"
          value={this.state.label}
        />
        <button
          className="btn btn-outline-secondary"
        >
          Add Element
        </button>
      </form>
    );
  };
};
