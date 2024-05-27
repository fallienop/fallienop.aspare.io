
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "./Responsive.css";
import Layout from "./features/Layout";
import Card from "./pages/Card";
import Results from "./pages/Results/Results";
import Favorite from "./pages/Favorite/Favorite";
import Shops from "./pages/Shops";
import ShopType from "./pages/ShopType";
import FilterPage from "./components/FilterPage/FilterPage";
import Home from "./pages/Home";
import MarkDetails from "./pages/RegistrationMark/MarkDetails";
import ItemDetails from "./pages/Car/ItemDetails";
import CategoryDetails from "./pages/CategoryDetails";
import LoginEmail from "./components/Logins/LoginEmail";
import LoginPhoneNumber from "./components/Logins/LoginPhoneNumber";
import ProfilePhotoDone from "./components/Logins/ProfilePhotoDone";
import CreateProfile from "./components/Logins/CreateProfile";
import CommunictyCommitment from "./components/Logins/CommunictyCommitment";
import ComfirmPhoto from "./components/Logins/ComfirmPhoto";
import FinishingSignup from "./components/Logins/FinishingSignup";
import Footer from "./features/Layout/Footer";
import Header from "./features/Layout/Header";
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';
import AllDatas from "./pages/AllDatas";
import { useDispatch } from "react-redux";
import AuthActionsComponent from "./actions/authAction";// Make sure to import your logout action

function App() {
  const dispatch = useDispatch();
const {logout}=AuthActionsComponent();
  useEffect(() => {
    const checkTokenExpiration = () => {
      const token = Cookies.get('token');
      if (token) {
        const decodedToken = jwtDecode(token);
        const expireDate = decodedToken["exp"];
        const currentTime = Math.floor(Date.now() / 1000); 
        if (expireDate < currentTime) {
          dispatch(logout());
        } 
      }
    };
    
    checkTokenExpiration();
    const intervalId = setInterval(checkTokenExpiration, 60000);
    
    return () => clearInterval(intervalId);
  }, [dispatch]);

  const { pathname } = useLocation();
  const route = pathname.split("/")[1];
  const routes = [
    "",
    "filter",
    "itemDetails",
    "card",
    "results",
    "favorite",
    "shops",
    "shoptype",
    "1",
    "categoryDetails",
    "alldatas",
    "markDetails"
  ];

  return (
    <>
      {routes.includes(route) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginemail/" element={<LoginEmail />} />
        <Route path="/login/" element={<LoginPhoneNumber />} />
        <Route path="/profilephotodone/" element={<ProfilePhotoDone />} />
        <Route path="/createprofile/" element={<CreateProfile />} />
        <Route path="/commitment/" element={<CommunictyCommitment />} />
        <Route path="/comfirmphoto/" element={<ComfirmPhoto />} />
        <Route path="/signup/" element={<FinishingSignup />} />
        <Route path="/categoryDetails/" element={<CategoryDetails />} />
        <Route path="/alldatas/" element={<AllDatas />} />
        <Route path="/filter/" element={<FilterPage />} />
        <Route path="/itemDetails/" element={<ItemDetails />} />
        <Route path="/itemDetails/:id" element={<ItemDetails />} />
        <Route path="/card/" element={<Card />} />
        <Route path="/results/:id" element={<Results />} />
        <Route path="/favorite/" element={<Favorite />} />
        <Route path="/shops/" element={<Shops />} />
        <Route path="/shoptype" element={<ShopType />} />
        <Route path="/markDetails/" element={<MarkDetails />} />
        <Route path="/markDetails/:id" element={<MarkDetails />} />
      </Routes>
      {routes.includes(route) && <Footer />}
    </>
  );
}

export default App;
