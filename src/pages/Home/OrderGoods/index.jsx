import React from "react";
import styled from "./order.module.scss";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import img from "../../../assets/aft.png";
import { Link } from "react-router-dom";

const OrderGoods = () => {
  return (
    <section className={styled.orderSwiper}>
      <div className="container">
        <div className="row">
          <div className={styled.cards}>
            <Swiper
              className={styled.swiperPart}
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ delay: 4000 }}
              navigation={{
                prevEl: `.${styled.customPrevButton}`,
                nextEl: `.${styled.customNextButton}`,
              }}
              pagination={{ clickable: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
              <div className={styled.block}>
              <div className={styled.text}>
                <h2>
                  Avto<span>Spare</span>
                </h2>
                <h3>Fərqi özün hiss et</h3>
                <button>
                  <Link to="/alldatas">İndi sifariş et</Link>
                </button>
              </div>
              <div className={styled.image}>
                <img src={img} alt="" />
              </div>
            </div>
              </SwiperSlide>
              
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderGoods;