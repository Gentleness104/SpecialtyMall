const host = 'http://localhost:'
const port = 61041;

const CommodityTypeURL = host+port+'/api/CommodityType';
const GoodsInformation = host+port+'/api/GoodsInformation';
const GoodsXiangXiInformation = host+port+'/api/GoodsXiangXiInformation';


const registerURL = host+port+'/api/user/Register';
const loginURL = host+port+'/api/user/Login';
const userUpdate = host+port+'/api/user/Update';


const CollectAddressAdd = host+port+'/api/CollectAddress/Add';
const CollectAddressUpdate = host+port+'/api/CollectAddress/Update';
const CollectAddressDelete = host+port+'/api/CollectAddress/Delete';
const CollectAddressget = host+port+'/api/CollectAddress/get';



const Order = host+port+'/api/Order/Order';
const OrderSearch = host+port+'/api/Order/Search';
const OrderReceive = host+port+'/api/Order/Receive';
const OrderComment = host+port+'/api/Order/Comment';



export {
    CommodityTypeURL,
    GoodsInformation,
    GoodsXiangXiInformation,
    
    
    loginURL,
    registerURL,
    userUpdate,

    CollectAddressAdd,
    CollectAddressUpdate,
    CollectAddressDelete,
    CollectAddressget,

    Order,
    OrderSearch,
    OrderReceive,
    OrderComment,

}