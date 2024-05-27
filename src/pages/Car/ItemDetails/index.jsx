import React, { useState, useEffect } from "react";
import styled from "./itemdetails.module.scss";
import item1 from "../../../assets/accumulator.svg";
import item2 from "../../../assets/accumulator.svg";
import item3 from "../../../assets/aft.png";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import { IoStarSharp } from "react-icons/io5";
import SwiperPart from "./SwiperPart";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addToBasket } from "../../../helpers/Basket/basket";
import { toggleFavorite } from "../../../helpers/Favorites/favorites";
import { useParams } from "react-router-dom";
const ItemDetails = () => {
  const mainURL = useSelector(state => state.aspareSlice.mainURL);
  const [count, setCount] = useState(0);
  const [imgs, setImgs] = useState([]);
  const [part, setPart] = useState({});

  const [sliderData, setSliderData] = useState({});
const navigate=useNavigate();
  const { id } = useParams();

  const getPart = async () => {
    try {
      const resp = await axios.get(`${mainURL}/parts/${id}`);
      // console.log(resp.data.part);
      setPart(resp.data.part);
      setImgs([
        { id: 0, value: `data:image/png;base64,${resp.data.part.image1}` },
        { id: 1, value: `data:image/png;base64,${resp.data.part.image2}` },
        { id: 2, value: `data:image/png;base64,${resp.data.part.image3}` },
      ]);
      setSliderData({ id: 0, value: `data:image/png;base64,${resp.data.part.image1}` });
    } catch (error) {
      console.error("Error fetching part data:", error);
    }
  };


  useEffect(() => {
    getPart();
    window.scrollTo(0,0); 

  }, [mainURL]);

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const totalPrice = count * (part.price || 0);

  const handleClick = (index) => {
    const slider = imgs[index];
    setSliderData(slider);
  };
  const handleLinkClick = (e) => {
    console.log(count)
    if (count == 0) {
      // e.preventDefault();
      alert("Səbətə əlavə etmək üçün say seçin");
    } else {
      addToBasket(part.id, count);
      alert("Səbətə əlavə olundu")
    }
  };
  return (
    <>
      <section className={styled.itemDetails}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
              <div className={styled.app}>
                <div className="row g-3">
                  <div className="col-lg-12">
                    <div className={styled.main}>
                      {sliderData.value && <img src={sliderData.value} alt="Part" />}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className={styled.otherIMG}>
                      {imgs.map((data, i) => (
                        <div className={styled.img} key={data.id}>
                          <img
                            className={sliderData.id === i ? "clicked" : ""}
                            src={data.value}
                            alt={`Part ${i}`}
                            onClick={() => handleClick(i)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
              <div className={styled.info}>
                <div className={styled.name}>
                  <h2>{part.name}</h2>
                  <h5>
                    Məhsulun kodu: <span>{part.code}</span>
                  </h5>
                </div>

                <div className={styled.price}>
                  <p>
                    {part.price}<span> AZN</span>
                  </p>
                </div>
                <div className={styled.about}>
                  <h3>Məhsul Xüsusiyətləri</h3>
                  <p>{part.description}</p>
                </div>
                <div className={styled.count}>
                  <div className={styled.name}>
                    <p>Miqdar</p>
                  </div>
                  <div className={styled.increaseANDdecrease}>
                    <button onClick={decreaseCount}>
                      <FaMinus />
                    </button>
                    <span>{count}</span>
                    <button onClick={increaseCount}>
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <div className={styled.sum}>
                  <span>Cəm</span>
                  <span>
                    AZN <span>{totalPrice}</span>
                  </span>
                </div>
                <div className={styled.buttons}>
                  <div className="row g-3" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div className="col-lg-5 col-md-12 col-sm-6 col-12">
                      <div className={styled.button1}>
                        {/* <Link to="/favorite"> */}
                        <div className={styled.a}>
                          <button  onClick={()=>toggleFavorite(part.id)}>Əlavə et</button>
                          <span>
                            <CiHeart />
                          </span>
                          </div>
                        {/* </Link> */} 
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-6 col-12">
                      <div className={styled.button2}>
                        <div className={styled.a} onClick={e=>handleLinkClick()} to="/card">
                          <button
                          //  onClick={e=>{if(count>0){addToBasket(part.id,count);}}}
                          >Səbətə əlavə et</button>
                          <span>
                            <PiShoppingCart />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SwiperPart />
    </>
  );
};

export default ItemDetails;