import React, { useState } from "react";
import styled from "./header.module.scss";
import { BsTelephone } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
import { PiShoppingCart } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from "react-redux";
import AuthActionsComponent from "../../../actions/authAction";
const Header = () => {

  const {login,logout}=AuthActionsComponent();
  const [isUserListOpen, setUserListOpen] = useState(false);
const dispatch=useDispatch();
const navigate=useNavigate();
  const toggleUserList = () => {
    setUserListOpen(!isUserListOpen);
  };

  const handleUserLogout = () => {
    dispatch(logout());
    navigate(0);
  }

  const token = Cookies.get('token');

  return (
    <header className={styled.head}>
      <div className="container">
        <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="col-lg-6 col-md-6 col-sm-10 col-10">
            <Link to="/">
              <div className={styled.logo}>
                <h3>
                  Auto<span className={styled.orange}>Spare</span>.
                  <span className={styled.orange}>az</span>
                </h3>
              </div>
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-2 col-2">
            <div className={styled.info}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className={styled.tel}>
                      <span className={styled.icon}>
                        <BsTelephone />
                      </span>
                      <span className={styled.text}>Əlaqə</span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={styled.delivery}>
                      <span className={styled.icon}>
                        <CiDeliveryTruck />
                      </span>
                      <span className={styled.text}>
                        Çatdırılma & Qaytarılma
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-1 col-md-1 col-sm-12">
                    <Link to="/card">
                    <div className={styled.card}>
                      <span>
                        <PiShoppingCart />
                      </span>
                    </div>
                    </Link>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-12">
                    <div className={styled.user} onClick={toggleUserList}>
                      <span className={styled.menu}>
                        <LuMenu />
                      </span>
                      <span className={styled.icon}>
                        <FaCircleUser />
                      </span>
                      {isUserListOpen && (
                        <ul className={styled.list}>
                          {token ?
                            <>
                              <li>
                                <Link to="/favorite">Favorilər</Link>
                              </li>
                              <li onClick={e => handleUserLogout()}>
                                <p>Çıxış</p>
                              </li>
                            </>
                            :
                            <>
                              <li>
                                <Link to="/signup">Qeydiyyat</Link>
                              </li>
                              <li>
                                <Link to="/loginemail">Giriş</Link>
                              </li>
                            </>
                          }
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
