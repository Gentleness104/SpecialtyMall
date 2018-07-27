import React, { Component } from 'react'

import { 
    Button,
    Toast,
    NavBar,
    WingBlank, 
    WhiteSpace ,
    List,
    InputItem,
    Icon,
    TextareaItem,
    Modal,
    Picker
} from 'antd-mobile';
import { district, provinceLite } from 'antd-mobile-demo-data';

import addressMessage from '../DataServer/AddressMessage';
import userManager from '../DataServer/UserManager';


export default class SetAddressScreen extends Component {

    // componentDidMount(){
    //     if(userManager.isLogin() === false){
    //         this.props.history.replace('/');
    //     }
    // }

    constructor(props) {
      super(props)
    
      this.state = {
        name:'',
        phone:''
      }
    }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={() => {this.props.history.goBack()}}
        >添加地址</NavBar>
        <WhiteSpace/>
        <List>
            <InputItem
                type={'text'}
                value={this.state.name}
                onChange={(name)=>{this.setState({name})}}
            >
                姓名：
            </InputItem>
            <InputItem
                type={'text'}
                value={this.state.phone}
                onChange={(phone)=>{this.setState({phone})}}
            >
                电话：
            </InputItem>
            
            <Picker extra="请选择(可选)"
            data={district}
            title="Areas"
            {...getFieldProps('district', {
                initialValue: ['340000', '341500', '341502'],
            })}
            onOk={e => console.log('ok', e)}
            onDismiss={e => console.log('dismiss', e)}
            >
            <List.Item arrow="horizontal">Multiple & cascader</List.Item>
            </Picker>

            {/* <InputItem
                type={'text'}
                value={this.state.phone}
                onChange={(phone)=>{this.setState({phone})}}
            >
                地区：
            </InputItem> */}
            <InputItem
                type={'text'}
                value={this.state.phone}
                onChange={(phone)=>{this.setState({phone})}}
            >
                详细地址：
            </InputItem>
        </List>
        <WhiteSpace/>
        <WingBlank>
            <WhiteSpace/>
            <Button
                type={'primary'}
                onClick={this.submitMessage}
            >
                提交
            </Button>
        </WingBlank>
      </div>
    )
  }

    submitMessage = async()=>{
        Toast.loading('内容上传中...',0);
        const resutl = await addressMessage.postMessage(this.state.name,this.state.phone);
        Toast.hide();
        if(resutl.success === false){
            Toast.fail(resutl.errorMessage);
            return;
        }
        Modal.alert('提交成功','点击确认键返回',[{
            text:'确认',
            onPress:()=>{this.props.history.goBack()}
        }])
    }
}
