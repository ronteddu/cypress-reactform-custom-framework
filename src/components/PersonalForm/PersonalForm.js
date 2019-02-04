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
        <Title title="Enter personal details"/>
        <input
          name="firstName"
          data-cy="firstName"
          placeholder="First Name"
          value={this.props.firstName}
          onChange={this.handleChangeForm}
        />
        <input
          name="lastName"
          data-cy="lastName"
          placeholder="Last Name"
          value={this.props.lastName}
          onChange={this.handleChangeForm}
        />
        <input
          name="email"
          data-cy="email"
          placeholder="Email"
          value={this.props.email}
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default PersonalForm;
