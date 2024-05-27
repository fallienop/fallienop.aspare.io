import React, { useEffect } from "react";
import styled from "./favorite.module.scss";
import { TiTick } from "react-icons/ti";
import { FaManatSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import basketimage from "../../assets/Cart1.svg";
import { useSelector, useDispatch } from "react-redux";
import { getBasket, reduceFromBasket, addToBasket, removeFromBasket } from "../../helpers/Redux/favoritesSlice";
import {getFavorites,toggleFavorite} from '../../helpers/Favorites/favorites';
import { useState } from "react";
import axios from "axios";
function Favorite() {
   
  const mainURL = useSelector(state => state.aspareSlice.mainURL);
  
  const dispatch = useDispatch();
  const [favorites,setFavoriteParts]=useState([])

  // const getFavoriteParts = async () => {
  //   const favorites = getFavorites();
  //   let favoriteParts=[];
  //   favorites.forEach(async x=>{
  //    const resp= await axios.get(`${mainURL}/parts/${x}`);
  //    console.log(resp.data)
  //    parts.push(resp.data)
  //   })
  //   return favoriteParts;
  // }

  const getFavoriteParts = async () => {
    const favorites = getFavorites();
    
    // Using Promise.all to handle multiple asynchronous requests
    const favoriteParts = await Promise.all(favorites.map(async (x) => {
      try {
        const resp = await axios.get(`${mainURL}/parts/${x}`);
        console.log(resp.data);
        return resp.data.part;
      } catch (error) {
        console.error(`Error fetching part data for ${x}:`, error);
        return null;
      }
    }));
  
    // Filter out any null responses due to errors
    return favoriteParts.filter(part => part !== null);
  };
  useEffect(()=>{
    const fetchFavoriteParts = async () => {
      const favParts = await getFavoriteParts();
      console.log(favParts);
      setFavoriteParts(favParts);
    };

    fetchFavoriteParts();

  },[]);



  return (
    <div className="hr-add">
      <hr />
      <div className="container">
        <div className="favorite-page-text">
          <p>
            Favorilər <span>({favorites.length})</span>
          </p>
        </div>
        <section className={styled.favorite}>
          {favorites.length === 0 ? (
            <div className={styled.main}>
              <img src={basketimage} alt="Empty basket" />
              <h2>Sizin favori məhsulunuz yoxdur</h2>
            </div>
          ) : (
            favorites.map((favorite, index) => (
              <div key={index} className="row">
                <div className="result-list favoritepage">
                  <div className="favorite-block">
                    <div className={styled.block}>
                      <div className="favoriteimg">
                        <img src={`data:image/png;base64,${favorite.image1}`} alt={favorite.name} />
                        <p className="favorite-img-text">{favorite.name}</p>
                      </div>  
                      <div className={styled.text}>
                        <div className={styled.name}>
                          <p>Xırdalan , Bakı</p>
                          <h5>
                            <span>
                              <TiTick />
                            </span>
                            AvtoPro
                          </h5>
                        </div>
                        <div className={styled.info}>
                          <span>2.5 km/40min</span>
                        </div>
                        <div className={styled.priceANDcount}>
                          <div className={styled.price}>
                            <div className={styled.priceNumber}>
                              <span>
                                <FaManatSign />
                              </span>
                              <span>{favorite.price}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="basket-class" onClick={() => handleRemoveFavorite(favorite.id)}>
                      <img src={basketimage} alt="image" />
                      <p>Səbətə at</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
}

export default Favorite;
