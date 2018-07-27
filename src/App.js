import React, { Component } from 'react';

import { Route,Redirect } from "react-router-dom";
import { Button } from 'antd-mobile';


// import LoginScreen from './Screen/LoginScreen';
// import RegisterScreen from './Screen/RegisterScreen';
import HomeScreen from './Screen/HomeScreen';
import MessageUpdateScreen from './Screen/MessageUpdateScreen';


class App extends Component {
  render() {
    return (
       <div>
           <Route  path={'/MessageUpdateScreen'}  component={MessageUpdateScreen} />
           {/* <Route path={'/RegisterScreen'} component={RegisterScreen} />
           <Route path={'/HomeScreen'} component={HomeScreen} /> */}
       </div>
    );
  }
}

export default App;
