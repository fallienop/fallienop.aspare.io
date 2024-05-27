import { useState, useEffect } from "react";
import avtodetal from "../assets/6zazG73XmCIVX596eIDD.png";

function Shops() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch('https://blbtd6h4-7186.euw.devtunnels.ms/Companies')
      .then(response => response.json())
      .then(data => {
        setCompanies(data.result.companies);
        // console.log(data.result.companies);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div className="shops-page">
      <div className="container">
        <section className="shops-navigation">
          <a href="">Ana Səhifə</a>
          <i className="fa-solid fa-angle-right"></i>
          <a href="">Mağazalar</a>
        </section>
      </div>
      <hr />
      <div className="container">
        <div className="shops-search-input">
          <div>
            <input type="search" name="" id="" placeholder="Mağaza axtar..." />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="shops-cars-list">
          {companies.map(company => (
            <div className="shops-car" key={company.id}>
              <img src={avtodetal} alt="" />
              <h3>{company.name}</h3>
              <p>
                <span>12336 Məhsul</span>
              </p>
            </div>
          ))
          }</div>

      </div>
    </div>
  );
}

export default Shops;
