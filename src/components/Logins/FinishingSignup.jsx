import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AuthActionsComponent from "../../actions/authAction";

const FinishingSignup = ({ onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordRight, setPasswordRight] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signup } = AuthActionsComponent();

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isSequential = (str) => {
    const sequentialPatterns = [
      "123456789",
      "987654321",
      "abcdefghijklmnopqrstuvwxyz",
      "zyxwvutsrqponmlkjihgfedcba",
    ];
    return sequentialPatterns.some((pattern) => str.includes(pattern));
  };

  const handleContinue = () => {
    const inputErrors = [];
    const inputRights = [];

    if (!firstName.trim()) {
      setFirstNameError("Ad tələb olunur");
    } else {
      setFirstNameError("");
    }

    if (!lastName.trim()) {
      setLastNameError("Soyad tələb olunur");
    } else {
      setLastNameError("");
    }

    if (!isValidEmail(email)) {
      setEmailError("Email");
    } else {
      setEmailError("");
    }

    if (password.length < 8) {
      inputErrors.push("Ən azı 8 simvol.");
    } else {
      inputRights.push("8 simvoldan ibarətdir.");
    }

    if (isSequential(password) || password.length < 8) {
      inputErrors.push("Şifrə gücü: zəif.");
    } else {
      inputRights.push("Şifrə gücü: yaxşı.");
    }

    if (
      password.toLowerCase().includes(firstName.toLowerCase()) ||
      password.toLowerCase().includes(lastName.toLowerCase()) ||
      password.toLowerCase().includes(email.toLowerCase())
    ) {
      inputErrors.push("Adınız və ya e-poçt ünvanınız ola bilməz.");
    } else {
      inputRights.push("Adınız və ya e-poçt ünvanınız deyil.");
    }

    if (!/\d/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      inputErrors.push("Parolda ən azı bir rəqəm və bir simvol olmalıdır.");
    } else {
      inputRights.push("Rəqəm və simvoldan ibarətdir.");
    }

    setPasswordError(inputErrors.length > 0 ? inputErrors.join(", ") : "");
    setPasswordRight(inputRights.length > 0 ? inputRights.join(", ") : "");

    if (inputErrors.length === 0) {
      setIsLoading(true);
      dispatch(signup(`${firstName} ${lastName}`, firstName, email, password, "123-456-7890"));
        // .then(() => {
        //   setIsLoading(false);
        //   navigate("/commitment");
        // })
        // .catch((err) => {
        //   setIsLoading(false);
        //   Handle error message here if needed
        // });
    }
  };

  const getErrorColor = (error) => {
    if (
      error.includes("8 simvoldan ibarətdir.") ||
      error.includes("Rəqəm və simvoldan ibarətdir.") ||
      error.includes("Şifrə gücü: yaxşı.") ||
      error.includes("Adınız və ya e-poçt ünvanınız deyil.")
    ) {
      return "#568D48";
    } else {
      return "#C13719";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">
      <div className="login-div">
        <div className="login-nav">
          <Link to={"/loginemail"}>
            <i className="fa-solid fa-chevron-left"></i>
          </Link>
          <p className="login-finish">Qeydiyyatı tamamlayın</p>
        </div>
        <div className="login-main login-text">
          <div className="login-city">
            <div className="name">
              <input
                type="text"
                placeholder="Ad"
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
                style={{ borderColor: firstNameError ? "red" : "#ccc" ,marginBottom:'1vw'}}
              />
              <input
                type="text"
                placeholder="Soyad"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
                style={{ borderColor: lastNameError ? "red" : "#ccc" }}
              />
            </div>
            <p>
              Məlumlatların şəxsiyyət vəsiqənizdəki ad və soyada uyğun
              olduğundan əmin olun.
            </p>
            {/* <input
              type="text"
              placeholder={birthdate ? birthdate : "Doğum tarixi"}
              name="birthdate"
              value={birthdate}
              onChange={handleInputChange}
              onFocus={() => setBirthdateText("/")}
              onBlur={() =>
                setBirthdateText(
                  birthdate
                    ? birthdate.split("-").reverse().join("/")
                    : "Doğum tarixi"
                )
              }
              style={{ borderColor: birthdateError ? "red" : "#ccc" }}
            /> */}

            {/* <p>
              Qeydiyyatdan keçmək üçün ən azı 18 yaşınız olmalıdır. Doğum
              tarixiniz Airbnb-dən istifadə edən digər insanlarla
              paylaşılmayacaq.
            </p> */}
            <div className="login-mail">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleInputChange}
                style={{ borderColor: emailError ? "red" : "#ccc" }}
              />
              {emailError && (
                <span className="error-message" style={{ color: "red" }}>
                  {emailError}
                </span>
              )}
            </div>
            <p>
              Təsdiqlənməsi ilə bağlı və qəbzlər üçün sizə e-poçta göndərəcəyik.
            </p>

            <div className="login-city login-phone-number">
              {/* <span className="placeholderlogin">Ölkə/Region</span> */}
              {/* <select name="" id="">
                <option value="">Azərbaycan (+994)</option>
                <option value="">Azərbaycan (+994)</option>
                <option value="">Azərbaycan (+994)</option>
                <option value="">Azərbaycan (+994)</option>
              </select> */}
              <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder=" Telefon nömrəsi" required />
            </div>
            <p className="privacypolicy">
              Nömrənizi təsdiqləmək üçün sizə mesaj göndərəcəyik. Standart mesaj
              və məlumat tarifləri tətbiq edilir.
            </p>
            <div className="password">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Şifrə"
                name="password"
                value={password}
                onChange={handleInputChange}
                style={{ borderColor: passwordError ? "red" : "#ccc" }}
              />
              <button onClick={toggleShowPassword}>
                {showPassword ? "Gizlə" : "Göstər"}
              </button>
              {passwordError && (
                <ul className="error-list">
                  {passwordError.split(", ").map((error, index) => (
                    <li key={index} style={{ color: getErrorColor(error) }}>
                      <i className="fa-solid fa-circle-xmark"></i>
                      {error}
                    </li>
                  ))}
                </ul>
              )}
              {passwordRight && (
                <ul className="error-list">
                  {passwordRight.split(", ").map((error, index) => (
                    <li key={index} style={{ color: getErrorColor(error) }}>
                      <i className="fa-solid fa-circle-check"></i>
                      {error}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <p>
              Razıyam və davam edin seçimini seçməklə mən Airbnb ilə razılaşıram
              <a href="">Xidmət Şərtləri, Ödənişlər üzrə Xidmət Şərtləri</a> və
              <a href="">Ayrıseçkiliyə qarşı Siyasət</a> və qəbul edin
              <a href="">Məxfilik Siyasəti.</a>
            </p>
          </div>
          <button
            className={`next ${isLoading ? "loading" : ""}`}
            onClick={()=>handleContinue()}
            disabled={isLoading}
          >
            {isLoading ? "..." : "Razılaşın və davam edin"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinishingSignup;