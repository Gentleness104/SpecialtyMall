const host = 'http://60.205.141.116:'
const port = 60004;

const CommodityTypeURL = host+port+'/api/CommodityType';
const GoodsInformation = host+port+'/api/GoodsInformation';
const GoodsXiangXiInformation = host+port+'/api/GoodsXiangXiInformation';


const Register = host+port+'/api/user/Register';
const Login = host+port+'/api/user/Login';
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
    
    
    Register,
    Login,
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