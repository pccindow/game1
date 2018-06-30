import React from 'react';

//

export default class Input extends React.Component {
 constructor(props) {
  super(props);
  this.state = { value: ''}

  this.handleChange = this.handleChange.bind(this);
  this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleKeyPress(event) {
    console.log(this.state.value);
    if (event.key === 'Enter') {
      console.log('value', event.target.value);
    }

  }

  render() {
    return (
      <form>
        <label>
          Mot:
          <input type="text"
          placeholder= 'Appuyez sur Entrer'
          value={this.state.value}
          onKeyDown={this.handleKeyPress}
          onChange={this.handleChange} />
        </label>
      </form>
      )
  }
}
