
import axios from 'axios';
import Cookies from 'js-cookie'
import { setAuthorizationToken } from '../helpers/Token/setAuthorizationToken';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const useAuth = () => {
    const navigate=useNavigate();
    const mainURL = useSelector(state => state.aspareSlice.mainURL);

    const login =async (username, password) => {
        return await axios.post(`${mainURL}/Login`, { userNameOrEmail:username, password :password})
            .then(user => {
                // console.log(user.data)
                // console.log(user.status)
             
                if (user.status) {
                    const { token } = user.data;
                    // console.log(token);
             
                    Cookies.set('token',token.accessToken,{secure:true,sameSite:true})
                    Cookies.set('refreshToken',token.refreshToken,{secure:true,sameSite:true})
                    
                    setAuthorizationToken(token);
                    navigate('/');
                }
                return user.data;
            })
            .catch(err => console.log(err));
    };

    const logout = () => {
        // localStocrage.removeItem("jwtToken");
        Cookies.remove("token")
        Cookies.remove("refreshToken")

        setAuthorizationToken(false);
    };

    const signUp = async (nameSurname,userName, email,password,phoneNumber) => {
        return await axios.post(`${mainURL}/SignUp`, { nameSurname,userName,email,password , phoneNumber})
            .then(user => {
              
             console.log(user.data)
             console.log(user)
             console.log(user.status)
                if (user.status==200) {
                    const token  = user.data;
               
                    Cookies.set('token',token.accessToken,{secure:true,sameSite:true})
                    Cookies.set('refreshToken',token.refreshToken,{secure:true,sameSite:true})
                
                    setAuthorizationToken(token.accessToken);
                    navigate('/');

                }
                return user.data;
            })
            .catch(err => console.log(err));
    };
    return { login, logout,signUp };
};

export default useAuth;
