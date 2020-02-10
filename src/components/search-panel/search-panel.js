import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.state = {
      search: ``
    }
  }

  onSearchChange(evt) {
    const search = evt.target.value;
    this.setState({search});
    this.props.onSearchChange(search);
  }

  render() {
    const {search} = this.state;
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.onSearchChange}
        value={search}
      />
    );

  };
};
