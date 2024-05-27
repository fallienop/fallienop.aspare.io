import React, { useEffect, useState } from "react";
import styled from "./navbar.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { filterSetter } from "../../helpers/Redux/aspareSlicer";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const mainURL = useSelector(state => state.aspareSlice.mainURL);

  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedYear, setSelectedYear] = useState([]);
  const [selectedModel, setSelectedModel] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1920 + 1 }, (_, index) => currentYear - index);
  

//  const checkTokenExpiration=()=>{
//   const token = Cookies.get('token');
//   if (token) {
//     const decodedToken = jwtDecode(token);
//     const expireDate = decodedToken["exp"];
//     if (expireDate < currentTime) {
//       dispatch(logout())
//     } 
//  }  
// }



  const makeSelectHandler = async (makeId) => {
    const response = await axios.get(`${mainURL}/Models/getmodels/${makeId}`);
    setModels(response.data.models);
  }

  const getMakes = async () => {
    try {
      const response = await axios.get(`${mainURL}/Makes`);
      setMakes(response.data.makes);
      // console.log(response.data.makes)
    } catch (error) {
      console.error("Error fetching makes:", error);
    }
  };

  const handleFilter = () => {
    dispatch(filterSetter({
      modelId: selectedModel,
      year: selectedYear
    }));
    // console.log({
    //   modelId: selectedModel,
    //   year: selectedYear
    // });
    navigate('/alldatas');
  }

  useEffect(() => {
    getMakes();
  }, []);

  return (
    <>
      <nav className={styled.navbar}>
        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-lg-9">
              <div className={styled.search}>
                <div className="container">
                  <div
                    className="row g-3"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <div className="col-6 col-lg-2 col-md-2 col-sm-6">
                      <div className={styled.searchBlock}>
                        <div className={styled.head}>
                          <h4>Marka</h4>
                        </div>
                        <div className={styled.subHead}>
                          <select defaultValue={0} onChange={e => { makeSelectHandler(e.target.value) }} name="makeSelect" id="makeSelect">
                            <option key={0} value="0" disabled >Markanı seçin</option>
                            {makes.map((x) => (
                              <option key={x.id} value={x.id}>{x.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-lg-2 col-md-2 col-sm-6">
                      <div className={styled.searchBlock}>
                        <div className={styled.head}>
                          <h4>Model</h4>
                        </div>
                        <div className={styled.subHead}>
                          <select onChange={e => setSelectedModel(e.target.value)} defaultValue={0} name="" id="">
                            <option key={0} disabled value="0">Modeli seçin</option>
                            {models.map((x) => (
                              <option key={x.id} value={x.id}>{x.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-lg-2 col-md-2 col-sm-6">
                      <div className={styled.searchBlock}>
                        <div className={styled.head}>
                          <h4>İl</h4>
                        </div>
                        <div className={styled.subHead}>
                          <select onChange={e => setSelectedYear(e.target.value)} name="" id="">
                            <option value="" >İli seçin</option>
                            {years.map((year) => (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-1 col-md-1"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}>
                      <div onClick={e => handleFilter()} className={styled.searchIcon}>
                        <span className={styled.icon}>
                          <IoSearchOutline />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container"></div>
      </nav>
      <section>
        <hr />
      </section>
    </>
  );
};

export default Navbar;