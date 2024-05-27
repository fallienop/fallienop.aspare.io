import React, { useState, useEffect } from "react";
import img from "../assets/S5_Category-1.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { getBasket, reduceFromBasket, addToBasket, removeFromBasket } from "../helpers/Basket/basket";
import { useSelector } from "react-redux";
import axios from "axios";

function Card() {
  const mainURL = useSelector(state => state.aspareSlice.mainURL);
  const [parts, setParts] = useState([]);
  const [counts, setCounts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)

  const getPart = async () => {
    var basket = getBasket();
 console.log(basket)
    const fetchedParts = await Promise.all(basket.map(async (item) => {
      try {
        const resp = await axios.get(`${mainURL}/parts/${item.productId}`);
     console.log(`${mainURL}/parts/${item.productId}`)
        return { product: resp.data.part, count: item.count };
      } catch (error) {
        console.error("Error fetching part data:", error);
        return null;
      }
    }));

    const validParts = fetchedParts.filter(part => part !== null);
    setParts(validParts.map(part => part.product));
    setCounts(validParts.reduce((acc, part) => {
      acc[part.product.id] = part.count;
      return acc;
    }, {}));
  };
  useEffect(() => {
 getPart();
  }, [mainURL]);


  useEffect(() => {
    console.log(parts);
    console.log(counts);
  }, [parts]);

  useEffect(() => {
    let total = 0;
    parts.forEach(x => {
      total += x.price * counts[x.id];
    });
    setTotalPrice(total)
  }, [counts])
  useEffect(() => {
    const inputs = document.querySelectorAll('.delivery-sort input[type="radio"]');
    inputs.forEach((input) => {
      input.addEventListener("change", function () {
        const label = this.closest("label");
        document.querySelectorAll(".delivery-sort label").forEach((l) => {
          l.classList.remove("active");
        });
        label.classList.add("active");
      });
    });

    // Cleanup event listeners on unmount
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("change", function () {
          const label = this.closest("label");
          document.querySelectorAll(".delivery-sort label").forEach((l) => {
            l.classList.remove("active");
          });
          label.classList.add("active");
        });
      });
    };
  }, []);

  const decreaseCount = (id) => {
    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      if (newCounts[id] > 0) {
        newCounts[id] -= 1;
      }
      return newCounts;
    });
    reduceFromBasket(id);
  };

  const increaseCount = (id) => {
    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      newCounts[id] = (newCounts[id] || 0) + 1;
      return newCounts;
    });
    addToBasket(id, 1);
  };

  const handleRemove = (id) => {
    // Remove from basket in localStorage
    removeFromBasket(id);

    // Remove from parts state
    setParts(parts.filter(part => part.id !== id));
  };

  return (
    <div className="card-page container">
      <div>
        <div>
          <div className="order-header">
            <p>Məhsul</p>
            <ul>
              <li>Sayı</li>
              <li>Qiyməti</li>
              <li>Total</li>
            </ul>
          </div>
          <hr />
          <div>
            {parts.map(x => (
              <div key={x.id} className="order-detail">
                <div>
                  <img src={`data:image/png;base64,${x.image1}`} alt="image" />
                  <div>
                    <p>{x.name}</p>
                    <br />
                    <p onClick={() => handleRemove(x.id)}>
                      <i className="fa-solid fa-x"></i> Sil
                    </p>
                  </div>
                </div>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faMinus} onClick={() => decreaseCount(x.id)} />
                    <p>{counts[x.id] || x.count}</p>
                    <FontAwesomeIcon icon={faPlus} onClick={() => increaseCount(x.id)} />
                  </li>
                  <li>
                    <p>AZN {x.price}</p>
                  </li>
                  <li>
                    <p>AZN {x.price * (counts[x.id] || x.count)}</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="promokod">
          <p>Kuponunuz var ?</p>
          <p>Səbət endirimi üçün kodunuzu əlavə edin</p>
          <div>
            <div>
              <i className="fa-solid fa-percent"></i>
              <input type="text" placeholder="PROMOKOD" />
            </div>
            <button>Tətbiq et</button>
          </div>
        </div>
      </div>
      <div className="card-summary">
        <p>Səbətin xülasəsi</p>
        <div className="delivery-sort">
          <div>
            <label htmlFor="delivery1">
              <div>
                <input type="radio" name="delivery" id="delivery1" />
                Pulsuz çatdırılma(Şəhər daxili)
              </div>
              <p>0.00</p>
            </label>
          </div>
          <div>
            <label htmlFor="delivery2">
              <div>
                <input type="radio" name="delivery" id="delivery2" />
                Poçtla göndəriş
              </div>
              <p>+ AZN 5.00</p>
            </label>
          </div>
          <div>
            <label htmlFor="delivery3">
              <div>
                <input type="radio" name="delivery" id="delivery3" />
                Mağazadan götürmək
              </div>
              <p>0.00</p>
            </label>
          </div>
          <div className="total-salary">
            <p>Ümumi məbləğ</p>
            <p>AZN {totalPrice}</p>
          </div>
          <p>Ödənişə keç</p>
        </div>
      </div>
    </div>
  );
}

export default Card;