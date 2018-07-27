import React, { Component } from 'react'

import {
    SearchBar, Button, WhiteSpace, WingBlank, NavBar, Icon, Carousel, Grid, Text,ListView ,List,InputItem
} from 'antd-mobile';

import ReactDOM from 'react-dom';

  


const data = [
    
]

const data1= Array.from(new Array(8)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));

export default class GoodsScreen extends Component {

    constructor(props) {
      super(props)
    
      this.state ={
        data: ['1', '2', '3'],
        imgHeight: 176,
      }
    }
    

    // state = {
    //     data: ['1', '2', '3'],
    //     imgHeight: 176,
    //   }


      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
      }
    
    render() {

        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        let index = data.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <div key={rowID} style={{ padding: '0 15px' }}>
                    <div
                        style={{
                            lineHeight: '50px',
                            color: '#888',
                            fontSize: 18,
                            borderBottom: '1px solid #F6F6F6',
                        }}
                    >{obj.title}</div>
                    <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                        <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
                        <div style={{ lineHeight: 1 }}>
                            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
                            <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>35</span>¥ {rowID}</div>
                        </div>
                    </div>
                </div>
            );
        };



        return (
            <div>
                {/* 导航栏 */}
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[

                        <Icon key="1" type="ellipsis" />,
                    ]}
                >商品详情</NavBar>
                
                <WhiteSpace />
                {/* 走马灯 */}

                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(val => (
                        <img
                            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    ))}
                </Carousel>
                <WhiteSpace/>
                <List>
                    <InputItem
                        type={'text'}
                        
                        placeholder={'商品名称'}
                    >
                        商品名称：
                    </InputItem>
                    <InputItem
                        type={'text'}
                        
                        placeholder={'商品其他信息'}
                    >
                        价格：
                    </InputItem>
                </List>
                <WhiteSpace/>
                <WhiteSpace />
                <Button
                 style={{ marginTop: '368px' }}
                type={'primary'}
                onClick={()=>{
                    this.props.history.push('/SetAddressScreen');
                }}
            >
                加入购物车
            </Button>
            <WhiteSpace/>
            <Button
                type={'primary'}
                onClick={()=>{
                    this.props.history.push('/SetAddressScreen')
                }}
            >
                下单
            </Button>
            </div>
        )
    }
}
