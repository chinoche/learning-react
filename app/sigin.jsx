import React from 'react';

class SignIn extends React.Component{
  render(){
    return <div>
      <label htmlFor="username">Username
        <input type="text" id="username"></input>
      </label>
      <label htmlFor="password">
        <input type="password" id="password"/>
      </label>
      <button id="signIn" onClick={this.props-onAuthComplete.bind(null,this._doAuth)}>Sign In</button>
    </div>
  },

  _doAuth(){
    return true;
  }
}

module.exports = SignIn;
