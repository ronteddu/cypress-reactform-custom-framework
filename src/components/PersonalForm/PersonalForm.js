import React, { Component } from 'react';
import Title from '../Title/Title';
import './PersonalForm.css';

class PersonalForm extends Component {
  handleChangeForm = event => {
    const { onChangeForm } = this.props;
    onChangeForm(event.target.name, event.target.value);
  };
  render() {
    return (
      <div className="personal-form" data-test="personal-form">
        <Title title="Персональная информация"/>
        <input
          name="firstName"
          placeholder="Имя"
          value={this.props.firstName}
          onChange={this.handleChangeForm}
        />
        <input
          name="lastName"
          placeholder="Фамилия"
          value={this.props.lastName}
          onChange={this.handleChangeForm}
        />
        <input
          name="email"
          placeholder="email"
          value={this.props.email}
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default PersonalForm;
