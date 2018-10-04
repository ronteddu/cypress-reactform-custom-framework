import React, { Component } from 'react';
import './Step.css';

class Step extends Component {
  handleClick = () => {
    const { isClickable, onClick, number } = this.props;
    if (isClickable) {
      onClick(number);
    }
  };
  render() {
    const { number, children, isSelected, isClickable } = this.props;
    return (
      <div
        className={
          'step' +
          (isSelected ? ' step-selected' : isClickable ? ' step-clickable' : '')
        }
        onClick={this.handleClick}
      >
        <div className="step__number">{number}</div>
        <div className="step__title">{children}</div>
      </div>
    );
  }
}

export default Step;
