import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
// import {login,logout} from '../../actions/authAction'

import AuthActionsComponent from '../../actions/authAction';

const LoginEmail = () => {
  const { login, logout } = AuthActionsComponent();
  // const { login } = useAuth();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleBlur = () => {
    if (!isValidEmail(email)) {
      document.querySelector(".login-city input").style.borderColor = "red";
      setHasError(!email.includes("@"));
    } else {
      document.querySelector(".login-city input").style.borderColor = "#ccc";
      document.querySelector(".login-city .error-message").style.color =
        "#717171";
    }
  };

  // const handleContinue = () => {
  //   if (!isValidEmail(email)) {
  //     setIsLoading(false);
  //     return;
  //   }
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     navigate("/finishingsignup");
  //   }, 3000);
  //   onClose();
  //   onOpenFinishingSignup();
  // };
  const handleContinue = (e) => {
    e.preventDefault();
    // console.log(email)
    // console.log(password)
    dispatch(login(email, password) || navigate("/"));

  };

  return (
    <div className="login">
      <div className="login-div">
        <div className="login-nav">
          <Link to="/">
            <FontAwesomeIcon icon={faTimes} className="close" />
          </Link>
          <p className="login-signup">Daxil ol və ya qeydiyyatdan keç</p>
        </div>
        <div className="login-email-main">
          <p>Xoş gəlmisiniz!</p>
          <div className="login-city login-mail">
            <input
              type="text"
              placeholder="Email"
              // defaultValue="fallienss"
              value={email}
              onChange={handleChangeEmail}
              onBlur={handleBlur}
              className={hasError ? "error" : ""}
            />
            {hasError && <button className="error-message">Email</button>}
          </div>
          <div className="login-city login-mail">
            <input
              type="password"
              placeholder="Password"
              // defaultValue="fallien1"
              value={password}
              onChange={handleChangePassword}
              onBlur={handleBlur}
              className={hasError ? "error" : ""}
            />
          </div>
          <button
            className={`next ${isLoading ? "loading" : ""}`}
            onClick={e => handleContinue(e)}
          >
            {isLoading ? "..." : "Davam edin"}
          </button>
          <div className="hr">
            <hr />
            <p>və ya</p>
            <hr />
          </div>
          <div className="gmail">
            <button>
              <img src="fb.png" alt="" />
              <p>Facebook ilə davam edin</p>
            </button>
            <button>
              <img src="google.png" alt="" />
              <p>Google ilə davam edin</p>
            </button>
            <button>
              <img src="apple.png" alt="" />
              <p>Apple ilə davam edin</p>
            </button>
            <button>
              <img src="mail.png" alt="" />
              <p>Email ilə davam edin</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginEmail;
