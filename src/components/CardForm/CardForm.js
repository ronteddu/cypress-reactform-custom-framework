import React, { Component } from 'react';
import './CardForm.css';
import Title from '../Title/Title';

class CardForm extends Component {
  handleChangeForm = event => {
    const { onChangeForm } = this.props;
    onChangeForm(event.target.name, event.target.value);
  };
  render() {
    return (
      <div data-test="card-form" className="card-form">
        <Title title="Номер карты"/>
        <input
          name="cardNumber"
          placeholder="0000 0000 0000 0000"
          value={this.props.cardNumber}
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default CardForm;
