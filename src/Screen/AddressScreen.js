import React, { Component } from 'react'

import { 
    Toast,
    NavBar,
    ListView,
    PullToRefresh
} from 'antd-mobile';

import addressMessage from '../DataServer/AddressMessage';
import userManager from '../DataServer/UserManager';

//import HomeListItem from '../ViewComponent/HomeListItem';


export default class AddressScreen extends Component {


    async componentDidMount(){

        if(userManager.isLogin() === false){
            this.props.history.replace('/');
            return;
        }

        //const result = await addressMessage.allMessages()
        // if(result.success === false){
        //     Toast.fail(result.errorMessage);
        //     if(result.errorCode === 10004){
        //         userManager.logout();
        //         this.props.history.replace('/');
        //     }
        //     return;
        // }
        // this.setState((preState)=>{
        //     return{
        //         dataSource:preState.dataSource.cloneWithRows(result.data)
        //     }   
        // })
    }

    constructor(props) {
        super(props)

        const dataSource = new ListView.DataSource({
            rowHasChanged:(row1, row2) => row1 !== row2,
        })

        this.state = {
            dataSource,
            refreshing:false
        }
    }

    onRefresh = async()=>{
        try {
            this.setState({refreshing:true});
            const result = await addressMessage.allMessages();
            this.setState({refreshing:false});
            if(result.success === false){
                Toast.fail(result.errorMessage);
                if(result.errorCode === 10004){
                    userManager.logout();
                    this.props.history.replace('/');
                }
                return;
            }
            this.setState((preState)=>{
                return{
                    dataSource:preState.dataSource.cloneWithRows(result.data),
                }   
            })
        } catch (error) {
            Toast.fail(`${error}`);
            this.setState({refreshing:false});
        }

    }
    
    
  render() {
    return (
      <div>
        <NavBar
            mode="dark"
            leftContent={[
                <span
                    key={1}
                    onClick={()=>{
                        this.props.history.replace('/');
                        userManager.logout();
                    }}
                >退出</span>
            ]}
            // rightContent={[
            //     <span
            //         key={2}
            //         onClick={()=>{
            //             this.props.history.push('/CreateMessageScreen');
            //         }}
            //     >添加地址</span>
            // ]}
        >收货地址</NavBar>
        <ListView
            useBodyScroll={true}
            dataSource={this.state.dataSource}
            pullToRefresh={
                <PullToRefresh
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                />
            }
            renderRow={this.renderRow}
        />
         
          <NavBar
            mode="dark"
            style={{ marginTop: '770px' }}
            
                    onClick={()=>{
                        this.props.history.push('/SetAddressScreen');
                    }}
        >添加收货地址
        </NavBar>
      
      </div>
     
    )
  }

    renderRow = (message)=>{
        // return (
        //     <HomeListItem 
        //         {...message}
        //         onItemClick={()=>{
        //             this.props.history.push('/CommentScreen/'+message.id)
        //         }} 
        //     />
        // )
    }
}
