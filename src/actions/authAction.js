

import useAuth from "../services/authService";

const AuthActionsComponent = () => {


    const authService = useAuth();

    const loginSuccess = user => {
        return {
            type: LOGIN_SUCCESS,
            user
        };
    };

    const loginError = error => {
        return {
            type: LOGIN_ERROR,
            error
        };
    };

    const login = (username, password) => {
        return dispatch => {
            authService.login(username, password)
                .then(data => {
                    data.message
                        ? dispatch(loginError(data.message))
                        : (dispatch(loginSuccess(data)))
                })
                .catch(err => dispatch(loginError(err)));
        }
    }

    const signup=(nameSurname,userName, email,password,phoneNumber)=>{
        return dispatch => {
            authService.signUp(nameSurname,userName, email,password,phoneNumber)
                .then(data => {
                    data.message
                        ? dispatch(loginError(data.message))
                        : (dispatch(loginSuccess(data)))
                })
                .catch(err => dispatch(loginError(err)));
        }
    }

    const logout = () => {
        authService.logout();
        return {
            type: LOGOUT
        };
    }

    return { login, logout, signup };
}
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";
export default AuthActionsComponent;
