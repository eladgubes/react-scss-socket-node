import React from 'react';
import FacebookLogin from 'react-facebook-login'


export class Facebook extends React.Component {

  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: ''
  }
  componentClicked = () => {
    console.log('clicked')
  }
  responseFacebook = (response) => {
    console.log('response is: ', response)
  }

  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = null
    } else {
      fbContent = (
        <FacebookLogin
          appId="303171991135012"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook} />

      )
    }
    return (
      <div>
        {fbContent}
      </div>
    )
  }
}