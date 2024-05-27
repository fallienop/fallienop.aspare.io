import React, { useEffect, useState } from "react";
import styled from "./bestselling.module.scss";
import image from "../../../assets/car.svg";
import { TiTick } from "react-icons/ti";
import { FaManatSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BestSelling = () => {
  const [cars, setCars] = useState([]);
  const mainURL = useSelector(state => state.aspareSlice.mainURL);
  useEffect(() => {
    fetch(`${mainURL}/Parts`)
      .then(response => response.json())
      .then(data => {
        setCars(data.result.parts);
        // console.log(data.result.parts);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const displayedCars = cars.slice(0, 4);
  const formatDesc = (desc) => {
    return desc ? desc.slice(0, 10) : "";
  };
  return (
    <section className={styled.bestSelling}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styled.head}>
              <h2>Ən çox satılan detallar</h2>
              <button>Hamısına bax</button>
            </div>
          </div>
        </div>
        <div className="row g-5">
          {displayedCars.map(car => (
            <div key={car.id} className="col-lg-3 col-md-6 col-sm-12 col-12">
              <Link to={`/itemDetails/${car.id}`}>
                <div className={styled.block}>
                  <div className={styled.img}>
                    <img src={`data:image/png;base64,${car.image1}`} alt="" />
                  </div>
                  <div className={styled.text}>
                    <div className={styled.name}>
                      <p>{car.name}</p>
                      <h5><span><TiTick /></span>AvtoPro</h5>
                    </div>
                    <div className={styled.info}>
                      <span>{car.description}</span>
                    </div>
                    <div className={styled.priceANDcount}>
                      <div className={styled.price}>
                        <span><FaManatSign /></span>
                        <span>{car.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;