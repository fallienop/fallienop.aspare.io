import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ComfirmPhoto = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const [isPhotoSelected, setIsPhotoSelected] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handlePhotoUpload = (event) => {
    if (isLoading) return;
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      // console.log("Photo uploaded");
      setUploadedPhoto(reader.result);
      setIsPhotoUploaded(true);
      setIsPhotoSelected(true);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/profilephotodone");
      }, 3000);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleContinue = () => {
    if (isPhotoUploaded && !isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/profilephotodone");
      }, 3000);
    }
  };

  return (
    <div className="login">
      <div className="login-div">
        <div className="login-nav">
          <Link to={"/createprofile"}>
            <i className="fa-solid fa-chevron-left"></i>
          </Link>
          <p className="login-signup">Profilinizi yaradın</p>
        </div>
        <div className="login-comfirm-phone">
          <div className="comfirmstep">
            <p>Profil şəkli əlavə edin</p>
            <p>
              Üzünüzü göstərən bir şəkil seçin. Hesabınız təsdiqlənənə qədər
              profil şəklinizə baxıla bilməyəcəklər
            </p>
            <div className="login-city login-photo">
              {isPhotoUploaded ? (
                <img src={uploadedPhoto} alt="Uploaded" />
              ) : (
                <label htmlFor="upload-photo" className="upload-label">
                  <input
                    type="file"
                    id="upload-photo"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    style={{ display: "none" }}
                  />
                  <i className="fa-regular fa-circle-user upload-icon"></i>
                </label>
              )}
            </div>
          </div>
          <hr />
          <button
            className={`next-comfirm-photo ${
              isLoading ? "loading-confirm" : ""
            }`}
            onClick={handleContinue}
            style={{ backgroundColor: isPhotoSelected ? "black" : "" }}
          >
            <div>
              <label htmlFor="upload-photo" className="upload-label">
                <input
                  type="file"
                  id="upload-photo"
                  accept="image/*"
                  style={{ display: "none" }}
                />
                <i
                  className="fa-solid fa-cloud-arrow-up"
                  style={{ visibility: isLoading ? "hidden" : "visible" }}
                ></i>
                <span>{isLoading ? "..." : "Upload a photo"}</span>
              </label>
            </div>
          </button>

          <Link to="/">
            <p className="confirm-later">Bunu sonra edəcəm</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComfirmPhoto;
