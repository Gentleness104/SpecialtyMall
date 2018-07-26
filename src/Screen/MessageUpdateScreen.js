import React,{Component} from 'react'

import {
    Button,
    Toast,
    NavBar,
    WingBlank,
    WhiteSpace,
    List,
    InputItem,
    Icon,
    ImagePicker,
    Modal
} from 'antd-mobile';

import userManager from '../DataServer/UserManager';

export default class MessageUpdateScreen extends Component{
    
    constructor(props){
        super(props)

        this.state={
            //nickname:props.location.state.nickname,
            files:[]
        }
    }

    render(){
        return(
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left"/>}
                    onLeftClick={()=>{this.props.history.goBack()}}
                >修改个人信息</NavBar>
                <WhiteSpace/>
                
                <ImagePicker
                    files={this.state.files}
                    onChange={(files)=>{this.setState({files})}}
                    selectable={this.state.files.length < 1}
                />
                <List>
                    <InputItem
                        type={'text'}
                        value={this.state.nickname}
                        onChange={(nickname)=>{this.setState({nickname})}}                    
                        placeholder={'请输入新昵称'}
                    >昵称：</InputItem>
                </List>
                <WhiteSpace/>
                <WingBlank>
                    <Button
                        type={'primary'}
                        onClick={async()=>{
                            const userNew={
                                nickname:this.state.nickname
                            }
                            if(this.state.files.length!==0){
                                userNew.image=this.state.files[0];
                            }
                            //
                            //userManager 错误
                            //

                            Modal.alert('修改成功','点击确认返回',[{
                                text:'确认',
                                onPress:()=>{this.props.history.goBack()}
                            }])
                        }}
                    >提交修改</Button>
                </WingBlank>
            </div>
        )
    }
}