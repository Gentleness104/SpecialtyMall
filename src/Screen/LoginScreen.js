import React, { Component } from 'react'

import { 
    Button,
    Toast,
    NavBar,
    WingBlank, 
    WhiteSpace ,
    List,
    InputItem,
} from 'antd-mobile';

import userManager from '../DataServer/UserManager';



export default class LoginScreen extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         Phone:'',
         Pwd:''
      }
    }
    

  render() {
    return (
      <div>
        <NavBar
            mode="dark"
        >登录</NavBar>
        <WhiteSpace/>
        <List>
            <InputItem
                type={'text'}
                value={this.state.Phone}
                onChange={(Phone)=>{this.setState({Phone})}}
                placeholder={'请输入登录用户名'}
            >
                用户名
            </InputItem>
            <InputItem
                type={'password'}
                value={this.state.Pwd}
                onChange={(Pwd)=>{this.setState({Pwd})}}
                placeholder={'请输入登录密码'}
            >
                密码
            </InputItem>
        </List>
        <WhiteSpace/>
        <WingBlank>
            <Button
                type={'primary'}
                onClick={async()=>{
                    console.log('xxx')
                    const result = await userManager.login(this.state.Phone,this.state.Pwd);
                    console.log(result);
                    if(result.success === false){
                        Toast.fail(result.errorMessage);
                        return;
                    }
                    this.props.history.replace('/HomeScreen');
                }}
            >
                登录
            </Button>
            <WhiteSpace/>
            <Button
                type={'primary'}
                onClick={()=>{
                    this.props.history.push('/RegisterScreen',{})
                }}
            >
                注册
            </Button>
        </WingBlank>
      </div>
    )
  }
}
