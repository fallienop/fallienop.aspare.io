import React from "react";
import styled from "./swiper.module.scss";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import thing from "../../../../assets/thingss.svg";

const SwiperPart = () => {
  return (
    <section className={styled.swiper}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styled.head}>
              <h2>Önərilən Məhsullar</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={styled.cards}>
            <Swiper
              className={styled.swiperPart}
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={50}
              slidesPerView={3}
              breakpoints={
                {
                  992: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  500: {
                    slidesPerView: 1,
                  },
                }
              }
              autoplay={{ delay: 2000 }}
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
                  <div className={styled.header}>
                    <h5>
                      Auto<span>Pro</span>
                    </h5>
                  </div>
                  <div className={styled.image}>
                    <img src={thing} alt="" />
                  </div>
                  <div className={styled.about}>
                    <h3>Hava filteri</h3>
                    <h4>Mercedes E220</h4>
                    <div className={styled.price}>
                      <div className={styled.current}>
                        <p>
                          AZN<span>384</span>
                        </p>
                      </div>
                      <div className={styled.discount}>
                        <p>
                          AZN<del>454</del>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styled.block}>
                  <div className={styled.header}>
                    <h5>
                      Auto<span>Pro</span>
                    </h5>
                  </div>
                  <div className={styled.image}>
                    <img src={thing} alt="" />
                  </div>
                  <div className={styled.about}>
                    <h3>Hava filteri</h3>
                    <h4>Mercedes E220</h4>
                    <div className={styled.price}>
                      <div className={styled.current}>
                        <p>
                          AZN<span>384</span>
                        </p>
                      </div>
                      <div className={styled.discount}>
                        <p>
                          AZN<del>454</del>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styled.block}>
                  <div className={styled.header}>
                    <h5>
                      Auto<span>Pro</span>
                    </h5>
                  </div>
                  <div className={styled.image}>
                    <img src={thing} alt="" />
                  </div>
                  <div className={styled.about}>
                    <h3>Hava filteri</h3>
                    <h4>Mercedes E220</h4>
                    <div className={styled.price}>
                      <div className={styled.current}>
                        <p>
                          AZN<span>384</span>
                        </p>
                      </div>
                      <div className={styled.discount}>
                        <p>
                          AZN<del>454</del>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styled.block}>
                  <div className={styled.header}>
                    <h5>
                      Auto<span>Pro</span>
                    </h5>
                  </div>
                  <div className={styled.image}>
                    <img src={thing} alt="" />
                  </div>
                  <div className={styled.about}>
                    <h3>Hava filteri</h3>
                    <h4>Mercedes E220</h4>
                    <div className={styled.price}>
                      <div className={styled.current}>
                        <p>
                          AZN<span>384</span>
                        </p>
                      </div>
                      <div className={styled.discount}>
                        <p>
                          AZN<del>454</del>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styled.block}>
                  <div className={styled.header}>
                    <h5>
                      Auto<span>Pro</span>
                    </h5>
                  </div>
                  <div className={styled.image}>
                    <img src={thing} alt="" />
                  </div>
                  <div className={styled.about}>
                    <h3>Hava filteri</h3>
                    <h4>Mercedes E220</h4>
                    <div className={styled.price}>
                      <div className={styled.current}>
                        <p>
                          AZN<span>384</span>
                        </p>
                      </div>
                      <div className={styled.discount}>
                        <p>
                          AZN<del>454</del>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styled.block}>
                  <div className={styled.header}>
                    <h5>
                      Auto<span>Pro</span>
                    </h5>
                  </div>
                  <div className={styled.image}>
                    <img src={thing} alt="" />
                  </div>
                  <div className={styled.about}>
                    <h3>Hava filteri</h3>
                    <h4>Mercedes E220</h4>
                    <div className={styled.price}>
                      <div className={styled.current}>
                        <p>
                          AZN<span>384</span>
                        </p>
                      </div>
                      <div className={styled.discount}>
                        <p>
                          AZN<del>454</del>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styled.block}>
                  <div className={styled.header}>
                    <h5>
                      Auto<span>Pro</span>
                    </h5>
                  </div>
                  <div className={styled.image}>
                    <img src={thing} alt="" />
                  </div>
                  <div className={styled.about}>
                    <h3>Hava filteri</h3>
                    <h4>Mercedes E220</h4>
                    <div className={styled.price}>
                      <div className={styled.current}>
                        <p>
                          AZN<span>384</span>
                        </p>
                      </div>
                      <div className={styled.discount}>
                        <p>
                          AZN<del>454</del>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styled.block}>
                  <div className={styled.header}>
                    <h5>
                      Auto<span>Pro</span>
                    </h5>
                  </div>
                  <div className={styled.image}>
                    <img src={thing} alt="" />
                  </div>
                  <div className={styled.about}>
                    <h3>Hava filteri</h3>
                    <h4>Mercedes E220</h4>
                    <div className={styled.price}>
                      <div className={styled.current}>
                        <p>
                          AZN<span>384</span>
                        </p>
                      </div>
                      <div className={styled.discount}>
                        <p>
                          AZN<del>454</del>
                        </p>
                      </div>
                    </div>
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

export default SwiperPart;
