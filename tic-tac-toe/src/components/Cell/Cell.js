import React from "react";
import classNames from 'classnames'

import "./Cell.css";

export const Cell = (props) => {
  let cellContentClasses = 'cell-content';
  let cellClasses = 'cell';

  if (props.value) {
    cellContentClasses += ' populated';
  }

  if (props.canHighlight) {
    cellClasses += ' winner';
  }
  
  return (
    <button className={cellClasses}>
        <span className={cellContentClasses}>{props.value}</span>
      </button>
  );
};
