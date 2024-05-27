import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPhoneNumber = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/loginemail");
    }, 3000);
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
        <div className="login-email">
          <p>Xoş gəlmisiniz!</p>
          <div className="login-city login-phone-number">
            <span className="placeholderlogin">Ölkə/Region</span>
            <select name="" id="">
              <option value="">Azərbaycan (+994)</option>
            </select>
            <input type="phone" placeholder="Telefon nömrəsi" />
          </div>
          <p className="privacypolicy">
            Nömrənizi təsdiqləmək üçün sizə mesaj göndərəcəyik. Standart mesaj
            və məlumat tarifləri tətbiq edilir.<span>Məxfilik Siyasəti</span>
          </p>
          <button
            className={`next ${isLoading ? "loading" : ""}`}
            onClick={handleContinue}
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

export default LoginPhoneNumber;
