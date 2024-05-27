import React, { useState, useEffect } from "react";
import Car from "../Car/index";
import image from "../../assets/car.svg";
import { TiTick } from "react-icons/ti";
import { FaManatSign } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import filterimage from "../../assets/Vector.svg";
import styled from "./results.module.scss";
import image1 from "../../assets/car.svg";
import { Link, useParams } from "react-router-dom";

function Results() {
  const [showEniInput, setShowEniInput] = useState(false);
  const [showHundurlukInput, setShowHundurlukInput] = useState(false);
  const [showRadiusInput, setShowRadiusInput] = useState(false);

  const [results, setResults] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`https://blbtd6h4-7186.euw.devtunnels.ms/Parts/category/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setResults(data.parts);
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };

    fetchResults();
  }, [id]);

  return (
    <div className="hr-add">
      <hr />
      <div className="container">
        <div className="result-navigation">
          <a href="">AvtoPro</a> <i className="fa-solid fa-greater-than"></i>{" "}
          <a href="">Təkərlər</a>
        </div>
        <div>
          <div className="results-filter">
            <div className="result-size">
              <ul className="dropdown-list">
                <li>
                  <a href="#" onClick={() => setShowEniInput(!showEniInput)}>
                    Eni <i className="fa-solid fa-chevron-down"></i>
                  </a>
                  {showEniInput && (
                    <input className="dropdown-input" type="number" placeholder="Eni daxil edin" />
                  )}
                </li>
                <li>
                  <a href="#" onClick={() => setShowHundurlukInput(!showHundurlukInput)}>
                    Hündürlük <i className="fa-solid fa-chevron-down"></i>
                  </a>
                  {showHundurlukInput && (
                    <input className="dropdown-input" type="number" placeholder="Hündürlüyü daxil edin" />
                  )}
                </li>
                <li>
                  <a href="#" onClick={() => setShowRadiusInput(!showRadiusInput)}>
                    Radius <i className="fa-solid fa-chevron-down"></i>
                  </a>
                  {showRadiusInput && (
                    <input className="dropdown-input" type="number" placeholder="Radiusu daxil edin" />
                  )}
                </li>
              </ul>
            </div>
            <div className="result-filter-search">
              <div>
                <img src={filterimage} alt="image" />
                <button> Filter</button>
              </div>
              <div>
                <i className="fa-solid fa-magnifying-glass"></i>
                <button>Search</button>
              </div>
            </div>
          </div>
          <section className={styled.results}>
            {Array.isArray(results) && results.length > 0 ? (
              results.map((result, index) => (
                <div key={index} className="row">
                  <div className="result-list favoritepage">
                    <Link to="/itemDetails">
                      <div className={styled.block}>
                        <div className={styled.img}>
                          <img src={`data:image/png;base64,${result.image1}`} alt="" />
                        </div>
                        <div className={styled.text}>
                          <div className={styled.name}>
                            <p>{result.name}</p>
                            <h5><span><TiTick /></span>AvtoPro</h5>
                          </div>
                          <div className={styled.info}>
                            <span>2.5 km/40min</span>
                          </div>
                          <div className={styled.priceANDcount}>
                            <div className={styled.price}>
                              <span><FaManatSign /></span>
                              <span>{result.price}</span>
                            </div>
                          </div>

                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p>No results found.</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Results;
