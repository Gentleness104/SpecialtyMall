const host = 'http://60.205.141.116:'
const port = 60004;

const CommodityTypeURL = host+port+'/api/CommodityType';
const GoodsInformationURL = host+port+'/api/GoodsInformation';
const GoodsXiangXiInformationURL = host+port+'/api/GoodsXiangXiInformation';


const RegisterURL = host+port+'/api/user/Register';
const LoginURL = host+port+'/api/user/Login';
const userUpdateURL = host+port+'/api/user/Update';


const CollectAddressAddURL = host+port+'/api/CollectAddress/Add';
const CollectAddressUpdateURL = host+port+'/api/CollectAddress/Update';
const CollectAddressDeleteURL = host+port+'/api/CollectAddress/Delete';
const CollectAddressgetURL = host+port+'/api/CollectAddress/get';



const OrderURL = host+port+'/api/Order/Order';
const OrderSearchURL = host+port+'/api/Order/Search';
const OrderReceiveURL = host+port+'/api/Order/Receive';
const OrderCommentURL = host+port+'/api/Order/Comment';



export {
    CommodityTypeURL,
    GoodsInformationURL,
    GoodsXiangXiInformationURL,
    
    
    RegisterURL,
    LoginURL,
    userUpdateURL,

    CollectAddressAddURL,
    CollectAddressUpdateURL,
    CollectAddressDeleteURL,
    CollectAddressgetURL,

    OrderURL,
    OrderSearchURL,
    OrderReceiveURL,
    OrderCommentURL,

}