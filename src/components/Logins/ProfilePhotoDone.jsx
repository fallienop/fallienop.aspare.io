import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProfilePhotoDone = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 3000);
  };

  return (
    <div className="login">
      <div className="login-div">
        <div className="login-nav">
          <Link to={"/comfirmphoto"}>
            <i className="fa-solid fa-chevron-left"></i>
          </Link>
          <p className="login-signup">Profilinizi yaradın</p>
        </div>
        <div className="login-comfirm-phone">
          <div className="comfirmstep">
            <p>Şəkil əlavə edin</p>
            <p>
              Üzünüzü göstərən bir şəkil seçin. Rezervasyonunuz təsdiqlənənə
              qədər ev sahibləri profil şəklinizə baxa bilməyəcəklər
            </p>
          </div>
          <hr />
          <button
            className={`login-done ${isLoading ? "loading" : ""}`}
            onClick={handleContinue}
          >
            {isLoading ? "..." : "Bitdi"}
          </button>
          <button className="change-photo">
            <Link to={"/comfirmphoto"}>Şəkli dəyişin</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhotoDone;
