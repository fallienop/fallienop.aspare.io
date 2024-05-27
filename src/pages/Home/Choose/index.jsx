import React, { useEffect, useState } from "react";
import styled from "./choose.module.scss";
import aft from "../../../assets/aft.png";
import wheel from "../../../assets/wheel.png";
import oil from "../../../assets/oil.svg";
import { FaArrowRight } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsTelephone } from "react-icons/bs";
import { TfiLock } from "react-icons/tfi";
import { CiCreditCard2 } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { filterSetter } from "../../../helpers/Redux/aspareSlicer";
import { useDispatch } from "react-redux";

const Choose = () => {

  const mainURL = useSelector(state => state.aspareSlice.mainURL);
  const [choose, setChoose] = useState([]);
 const dispatch=useDispatch();
 const navigate=useNavigate();
  useEffect(() => {
    fetch(`${mainURL}/Categories`)
      .then(response => response.json())
      .then(data => {
        setChoose(data);
        // console.log(data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, [])

  const handleCategorySelect = (categoryid) => {
    dispatch(filterSetter({
     categoryId: categoryid
    }));
    navigate('/alldatas');
 }

  const displayedCategories = choose.slice(0, 4);

  return (
    <>
      <section className={styled.choose}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={styled.chooseHead}>
                <div className={styled.head}>
                  <h2>Seçim bolluğu</h2>
                </div>
                <div className={styled.showAll}>
                  <Link to="/categoryDetails">
                    <button>Bütün kateqoriyalar</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-3" style={{ marginTop: 30 }}>
            {
              displayedCategories.map(choosing => (
                <div key={choosing.id} className="col-lg-6 col-md-6 col-sm-12">
                  <div className={styled.card}>
                    <div className={styled.text}>
                      <p>{choosing.name}</p>
                      <div className={styled.link}>
                        <div onClick={e=>handleCategorySelect(choosing.id)}>
                          <span>Keçid et</span>
                          <span>
                            <FaArrowRight />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={styled.image}>
                      <img src={`data:image/png;base64,${choosing.image}`} alt="" />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className={styled.services}>
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className={styled.block}>
                <span>
                  <LiaShippingFastSolid />
                </span>
                <p>Pulsuz çatdırılma</p>
                <h5>100 azn - dən yuxarı sifariş etdikdə</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className={styled.block}>
                <span>
                  <CiCreditCard2 />
                </span>
                <p>Pul geri qayıtması</p>
                <h5>3-4 gün ərzində</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className={styled.block}>
                <span>
                  <TfiLock />
                </span>
                <p>Təhlükəsiz Ödənişlər</p>
                <h5>Visa tərəfindən qorunur</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className={styled.block}>
                <span>
                  <BsTelephone />
                </span>
                <p>24/7 Dəstək</p>
                <h5>Telefon və E-poçt dəstəyi</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;