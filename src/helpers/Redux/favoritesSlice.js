export const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

export const setFavorites = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const addToFavorites = (productId) => {
  return (dispatch, getState) => {
    const favorites = getState().favorites.favorites;
    const isAlreadyFavorite = favorites.some(
      (item) => item.productId === productId
    );

    if (!isAlreadyFavorite) {
      dispatch(addFavorite(productId)); 
    }
  };
};

export const removeFromFavorites = (productId) => {
  return (dispatch, getState) => {
    let favorites = getState().favorites.favorites;
    favorites = favorites.filter((item) => item.productId !== productId);
    dispatch(setFavorites(favorites)); 
  };
};

export const getBasket = () => {
  const basket = localStorage.getItem("basket");
  return basket ? JSON.parse(basket) : [];
};

export const setBasket = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

export const addToBasket = (productId, count) => {
  return (dispatch, getState) => {
    if (productId != undefined) {
      const basket = getBasket();
      const productIndex = basket.findIndex(
        (item) => item.productId === productId
      );

      if (productIndex !== -1) {
        // If the product already exists, increase the count
        basket[productIndex].count += count;
      } else {
        // If the product doesn't exist, add it to the basket
        basket.push({ productId, count: count });
      }

      dispatch(setBasket(basket)); // Redux store'u güncelle
      // İsteğe bağlı olarak local storage'a eklemeyi buraya taşıyabilirsiniz
    }
  };
};

// Function to reduce the count of a product in the basket
export const reduceFromBasket = (productId) => {
  return (dispatch, getState) => {
    if (productId != undefined) {
      let basket = getBasket();
      const productIndex = basket.findIndex(
        (item) => item.productId === productId
      );

      if (basket[productIndex].count !== 1) {
        basket[productIndex].count -= 1;
        dispatch(setBasket(basket)); // Redux store'u güncelle
        // İsteğe bağlı olarak local storage'a eklemeyi buraya taşıyabilirsiniz
      } else {
        dispatch(removeFromBasket(productId)); // Sepetten kaldır
      }
    }
  };
};

// Function to remove a product from the basket
export const removeFromBasket = (productId) => {
  return (dispatch, getState) => {
    let basket = getBasket();
    basket = basket.filter((item) => item.productId !== productId);
    dispatch(setBasket(basket)); // Redux store'u güncelle
    // İsteğe bağlı olarak local storage'dan silmeyi buraya taşıyabilirsiniz
  };
};
