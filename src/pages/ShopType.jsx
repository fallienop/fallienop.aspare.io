import React from "react";
import Navbar from "../components/Navbar";
import Category from "./Category";
import avtodetal from "../assets/6zazG73XmCIVX596eIDD.png";
import detail1 from "../assets/16862410556481ff1f1f78e.jpg";

function ShopType() {
  return (
    <div className="shops-type-page">
      <div className="container">
        <section className="shops-navigation shops-type-navigation">
          <a href="">Ana Səhifə</a>
          <i className="fa-solid fa-angle-right"></i>
          <a href="">Mağazalar</a>
        </section>
      </div>
      <hr />
      <div  className="container">
        <div className="shosps-type-detail">
          <div className="shops-type-site-detail">
            <h1>AvtoDetal</h1>
            <div className="shops-type-detail-text">
              <div>
                <div>
                  <div>
                    <i className="fa-solid fa-phone"></i> <p>055 826 26 25</p>
                  </div>
                  <div>
                    <i className="fa-solid fa-location-dot"></i>{" "}
                    <p>Bakı, Mikayıl Əliyev 24/8</p>
                  </div>
                </div>
                <div>
                  <div>
                    <i className="fa-solid fa-globe"></i>
                    <a href="#">avtodetal.az</a>
                  </div>
                  <div>
                    <i className="fa-regular fa-clock"></i>
                    <p>09:00 - 19:00</p>
                  </div>
                </div>
              </div>
              <div className="">
                <ul>
                  <li>
                    <i className="fa-brands fa-youtube"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-instagram"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-whatsapp"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-facebook"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="shops-type-detail-img">
            <img src={avtodetal} alt="" />
          </div>
        </div>
      </div>
      <hr />
      <Navbar />
      {/* <Category /> */}
      <hr />
      <div className="shop-type-product-number">
        <p>
          <span>12336</span> nəticə tapıldı
        </p>
      </div>
      <div className="shops-shop-type-products">
        <div className="shop-type-product">
          <div>
            <a href="">
              <i className="fa-solid fa-heart"></i>
              <img src={detail1} alt="" />
            </a>
          </div>
          <ul>
            <li>
              <p>4.00 ₼</p>
              <button>Mağaza</button>
            </li>
            <li>
              <p>Əyləc bəndin ştifti Me...</p>
            </li>
            <li>
              <p>
                <i className="fa-solid fa-location-dot"></i> Bakı
              </p>
              <p>
                <i className="fa-solid fa-eye"></i> <span>0</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="shop-type-product">
          <div>
            <a href="">
              <i className="fa-solid fa-heart"></i>
              <img src={detail1} alt="" />
            </a>
          </div>
          <ul>
            <li>
              <p>4.00 ₼</p>
              <button>Mağaza</button>
            </li>
            <li>
              <p>Əyləc bəndin ştifti Me...</p>
            </li>
            <li>
              <p>
                <i className="fa-solid fa-location-dot"></i> Bakı
              </p>
              <p>
                <i className="fa-solid fa-eye"></i> <span>0</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="shop-type-product">
          <div>
            <a href="">
              <i className="fa-solid fa-heart"></i>
              <img src={detail1} alt="" />
            </a>
          </div>
          <ul>
            <li>
              <p>4.00 ₼</p>
              <button>Mağaza</button>
            </li>
            <li>
              <p>Əyləc bəndin ştifti Me...</p>
            </li>
            <li>
              <p>
                <i className="fa-solid fa-location-dot"></i> Bakı
              </p>
              <p>
                <i className="fa-solid fa-eye"></i> <span>0</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="shop-type-product">
          <div>
            <a href="">
              <i className="fa-solid fa-heart"></i>
              <img src={detail1} alt="" />
            </a>
          </div>
          <ul>
            <li>
              <p>4.00 ₼</p>
              <button>Mağaza</button>
            </li>
            <li>
              <p>Əyləc bəndin ştifti Me...</p>
            </li>
            <li>
              <p>
                <i className="fa-solid fa-location-dot"></i> Bakı
              </p>
              <p>
                <i className="fa-solid fa-eye"></i> <span>0</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="shop-type-product">
          <div>
            <a href="">
              <i className="fa-solid fa-heart"></i>
              <img src={detail1} alt="" />
            </a>
          </div>
          <ul>
            <li>
              <p>4.00 ₼</p>
              <button>Mağaza</button>
            </li>
            <li>
              <p>Əyləc bəndin ştifti Me...</p>
            </li>
            <li>
              <p>
                <i className="fa-solid fa-location-dot"></i> Bakı
              </p>
              <p>
                <i className="fa-solid fa-eye"></i> <span>0</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="shop-type-product">
          <div>
            <a href="">
              <i className="fa-solid fa-heart"></i>
              <img src={detail1} alt="" />
            </a>
          </div>
          <ul>
            <li>
              <p>4.00 ₼</p>
              <button>Mağaza</button>
            </li>
            <li>
              <p>Əyləc bəndin ştifti Me...</p>
            </li>
            <li>
              <p>
                <i className="fa-solid fa-location-dot"></i> Bakı
              </p>
              <p>
                <i className="fa-solid fa-eye"></i> <span>0</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="shop-type-product">
          <div>
            <a href="">
              <i className="fa-solid fa-heart"></i>
              <img src={detail1} alt="" />
            </a>
          </div>
          <ul>
            <li>
              <p>4.00 ₼</p>
              <button>Mağaza</button>
            </li>
            <li>
              <p>Əyləc bəndin ştifti Me...</p>
            </li>
            <li>
              <p>
                <i className="fa-solid fa-location-dot"></i> Bakı
              </p>
              <p>
                <i className="fa-solid fa-eye"></i> <span>0</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="shop-type-product">
          <div>
            <a href="">
              <i className="fa-solid fa-heart"></i>
              <img src={detail1} alt="" />
            </a>
          </div>
          <ul>
            <li>
              <p>4.00 ₼</p>
              <button>Mağaza</button>
            </li>
            <li>
              <p>Əyləc bəndin ştifti Me...</p>
            </li>
            <li>
              <p>
                <i className="fa-solid fa-location-dot"></i> Bakı
              </p>
              <p>
                <i className="fa-solid fa-eye"></i> <span>0</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="shop-type-product">
          <div>
            <a href="">
              <i className="fa-solid fa-heart"></i>
              <img src={detail1} alt="" />
            </a>
          </div>
          <ul>
            <li>
              <p>4.00 ₼</p>
              <button>Mağaza</button>
            </li>
            <li>
              <p>Əyləc bəndin ştifti Me...</p>
            </li>
            <li>
              <p>
                <i className="fa-solid fa-location-dot"></i> Bakı
              </p>
              <p>
                <i className="fa-solid fa-eye"></i> <span>0</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="shop-type-product">
          <div>
            <a href="">
              <i className="fa-solid fa-heart"></i>
              <img src={detail1} alt="" />
            </a>
          </div>
          <ul>
            <li>
              <p>4.00 ₼</p>
              <button>Mağaza</button>
            </li>
            <li>
              <p>Əyləc bəndin ştifti Me...</p>
            </li>
            <li>
              <p>
                <i className="fa-solid fa-location-dot"></i> Bakı
              </p>
              <p>
                <i className="fa-solid fa-eye"></i> <span>0</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="shop-type-product">
          <div>
            <a href="">
              <i className="fa-solid fa-heart"></i>
              <img src={detail1} alt="" />
            </a>
          </div>
          <ul>
            <li>
              <p>4.00 ₼</p>
              <button>Mağaza</button>
            </li>
            <li>
              <p>Əyləc bəndin ştifti Me...</p>
            </li>
            <li>
              <p>
                <i className="fa-solid fa-location-dot"></i> Bakı
              </p>
              <p>
                <i className="fa-solid fa-eye"></i> <span>0</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="shop-type-product">
          <div>
            <a href="">
              <i className="fa-solid fa-heart"></i>
              <img src={detail1} alt="" />
            </a>
          </div>
          <ul>
            <li>
              <p>4.00 ₼</p>
              <button>Mağaza</button>
            </li>
            <li>
              <p>Əyləc bəndin ştifti Me...</p>
            </li>
            <li>
              <p>
                <i className="fa-solid fa-location-dot"></i> Bakı
              </p>
              <p>
                <i className="fa-solid fa-eye"></i> <span>0</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="shop-type-product">
          <div>
            <a href="">
              <i className="fa-solid fa-heart"></i>
              <img src={detail1} alt="" />
            </a>
          </div>
          <ul>
            <li>
              <p>4.00 ₼</p>
              <button>Mağaza</button>
            </li>
            <li>
              <p>Əyləc bəndin ştifti Me...</p>
            </li>
            <li>
              <p>
                <i className="fa-solid fa-location-dot"></i> Bakı
              </p>
              <p>
                <i className="fa-solid fa-eye"></i> <span>0</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="shop-type-product">
          <div>
            <a href="">
              <i className="fa-solid fa-heart"></i>
              <img src={detail1} alt="" />
            </a>
          </div>
          <ul>
            <li>
              <p>4.00 ₼</p>
              <button>Mağaza</button>
            </li>
            <li>
              <p>Əyləc bəndin ştifti Me...</p>
            </li>
            <li>
              <p>
                <i className="fa-solid fa-location-dot"></i> Bakı
              </p>
              <p>
                <i className="fa-solid fa-eye"></i> <span>0</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="shop-type-product">
          <div>
            <a href="">
              <i className="fa-solid fa-heart"></i>
              <img src={detail1} alt="" />
            </a>
          </div>
          <ul>
            <li>
              <p>4.00 ₼</p>
              <button>Mağaza</button>
            </li>
            <li>
              <p>Əyləc bəndin ştifti Me...</p>
            </li>
            <li>
              <p>
                <i className="fa-solid fa-location-dot"></i> Bakı
              </p>
              <p>
                <i className="fa-solid fa-eye"></i> <span>0</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShopType;
