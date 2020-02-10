import React from 'react';

import './item-status-filter.css';

const buttonsData = [
  {name: `all`, label: `All`},
  {name: `active`, label: `Active`},
  {name: `done`, label: `Done`}
];

const ItemStatusFilter = (props) => {
  const {filter, onFilterChange} = props;
  const buttons = buttonsData.map(({name, label}) => {
    const isActive = name === filter;
    const classes = isActive ? `btn-info` : `btn-outline-secondary`;
    return (
      <button
        key={name}
        type="button"
        className={`btn ${classes}`}
        onClick={() => onFilterChange(name)}
      >
        {label}
      </button>
    );
  });
  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
};

export default ItemStatusFilter;
