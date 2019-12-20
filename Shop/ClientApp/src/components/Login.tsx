import GoogleLogin from 'react-google-login';
import React, { Component } from 'react';

class Login extends Component {
    state = {

    }

    render() {
  
      const { onSuccess, onFailrue } = this.props
  
      return (
        <div className="Login">
        <GoogleLogin
          clientId="381711725264-c0fuikg74aov7suvkqi2tv1b0l6rvsck.apps.googleusercontent.com" 
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={onSuccess}
          onFailure={onFailrue}
        />
  
        </div>
      );
    }
  }
  
  export default Login;