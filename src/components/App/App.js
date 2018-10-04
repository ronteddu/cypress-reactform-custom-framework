import React, { Component } from 'react';
import './App.css';
import Step from '../Step/Step';
import CardForm from '../CardForm/CardForm';
import PersonalForm from '../PersonalForm/PersonalForm';

class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };

  handleTabClick = tab => {
    this.setState({
      step: tab
    });
  };

  handleChangeForm = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  handleClickNextForm = () => {
    this.setState({
      step: this.state.step + 1
    });
  };

  renderForm = () => {
    switch (this.state.step) {
      case 1:
        return (
          <PersonalForm
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            onChangeForm={this.handleChangeForm}
          />
        );
      case 2:
        return (
          <CardForm
            cardNumber={this.state.cardNumber}
            onChangeForm={this.handleChangeForm}
          />
        );
      case 3:
        return <p data-test="congratulations">Поздравляем</p>;
      default:
        return <p>Ошибка!</p>;
    }
  };

  isFormCommitable = () => {
    switch (this.state.step) {
      case 1:
        return (
          this.state.firstName !== '' &&
          this.state.lastName !== '' &&
          this.state.email !== '' &&
          this.state.email.includes('@')
        );
      case 2:
        return this.state.cardNumber.length === 16;
      default:
        return false;
    }
  };

  render() {
    const thisStep = this.state.step;
    return (
      <div className="container">
        <div className="tab-panel">
          <Step
            number={1}
            isSelected={thisStep === 1}
            children={'Personal info'}
            isClickable={thisStep > 1}
            onClick={this.handleTabClick}
          />
          <Step
            number={2}
            isSelected={thisStep === 2}
            children={'Card info'}
            isClickable={thisStep > 2}
            onClick={this.handleTabClick}
          />
          <Step number={3} isSelected={thisStep === 3} children={'Success!'} />
        </div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button
            className="button-next"
            onClick={this.handleClickNextForm}
            disabled={!this.isFormCommitable()}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
