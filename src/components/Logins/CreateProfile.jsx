import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/comfirmphoto");
    }, 3000);
  };

  return (
    <div className="login">
      <div className="login-div">
        <div className="login-nav">
          <Link to={"/commitment"}>
            <i className="fa-solid fa-chevron-left"></i>
          </Link>

          <p className="login-signup">Profilinizi yaradın</p>
        </div>
        <div className="login-main-create">
          <p>Dünyada qalmaq üçün yerləri və unikal təcrübələri kəşf edin.</p>
          <button
            className={`next-create ${isLoading ? "loading" : ""}`}
            onClick={handleContinue}
          >
            {isLoading ? "..." : "Davam edin"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
