import React, { useEffect, useState } from "react";
import styled from "./categorydetails.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import wheel from "../../assets/background.svg";

const CategoryDetails = () => {
  const mainURL = useSelector((state) => state.aspareSlice.mainURL);
  const [categoryDetails, setCategoryDetails] = useState([]);

  useEffect(() => {
    fetch(`${mainURL}/Categories`)
      .then((response) => response.json())
      .then((data) => {
        setCategoryDetails(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);
  return (
    <section className={styled.categoryDetails}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styled.head}>
              <h2>Kateqoriyalar</h2>
            </div>
          </div>
        </div>
        <div className="row g-3" style={{ marginTop: 30 }}>
          {categoryDetails.map((category) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={category.id}>
              <div className={styled.blocks}>
                <div className={styled.image}>
                  <img src={`data:image/png;base64,${category.image}`} alt="" />
                </div>
                <div className={styled.texts}>
                  <div className={styled.name}>
                    <h3>{category.name}</h3>
                  </div>
                  <Link to="/results">
                    <div className={styled.link}>
                      <span>Keçid et</span>
                      <span>
                        <FaArrowRight />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CategoryDetails;