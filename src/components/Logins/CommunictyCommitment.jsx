import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CommunictyCommitment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/createprofile");
    }, 3000);
  };

  return (
    <div className="login">
      <div className="login-div">
        <div className="login-nav-community">
          <p className="login-community">İcma öhdəliklərimiz</p>
        </div>
        <div className="login-main-community">
          <p>Airbnb hər kəsin aid ola biləcəyi bir cəmiyyətdir</p>
          <p>
            Bunu təmin etmək üçün sizdən aşağıdakıları yerinə yetirməyinizi
            xahiş edirik: <br /> <br />
            İrqindən, dinindən, millətindən, etnik mənsubiyyətindən, dəri
            rəngindən, əlilliyindən, cinsindən, cinsi kimliyindən, cinsi
            oriyentasiyasından və ya yaşından asılı olmayaraq, Airbnb
            icmasındakı hər kəsə hörmətlə, mühakimə və ya qərəzsiz davranmağa
            razıyam.
          </p>
          <p>
            Daha ətraflı<i className="fa-solid fa-chevron-right"></i>
          </p>
          <button
            className={`next ${isLoading ? "loading" : ""}`}
            onClick={handleContinue}
          >
            {isLoading ? "..." : "Razılaşın və davam edin"}
          </button>
          <button className="decline">İmtina</button>
        </div>
      </div>
    </div>
  );
};

export default CommunictyCommitment;
