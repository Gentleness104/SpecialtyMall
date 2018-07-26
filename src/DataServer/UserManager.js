import { loginURL,registerURL } from './URLConfig';

class UserManager {
    async register(Phone,Pwd){
        try {
            const user={
                Phone,
                Pwd
            }
            const res=await fetch(registerURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user)
            });

            const result = await res.json();
            if(result.success==true)
            {
                localStorage.token = result.token
            }
            return result;
        } catch (error) {
            return {
                success:false,
                errorMessage:'网络错误'
            }
        }
    }

  

   
    async login(Phone,Pwd){
        try {
            const user={
                Phone,
                Pwd
            }
            const res=await fetch(loginURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user)

            });

            const result=await res.json();

            if(result.success==true)
            {
                localStorage.token = result.data.token
            }
            return result;
        } catch (error) {
            return {
                success:false,
                errorMessage:'网络错误'
            }
        }
    }

    logout(){
        localStorage.token = '';
    }

    isLogin(){
        if(localStorage.token === ''){
            return false;
        } else {
            return true;
        }
    }

}


export default new UserManager();