
export const getBasket = () => {
    const basket = localStorage.getItem('basket');
    return basket ? JSON.parse(basket) : [];
};

export const setBasket = (basket) => {
    localStorage.setItem('basket', JSON.stringify(basket));
};

export const addToBasket = (productId, count) => {
    if (productId != undefined) {
        const basket = getBasket();
        const productIndex = basket.findIndex(item => item.productId === productId);
        if (productIndex !== -1) {
            basket[productIndex].count += count;
        } else {
            basket.push({ productId, count: count });
        }

        setBasket(basket);
    }
};

export const reduceFromBasket = (productId) => {
    if (productId != undefined) {
        const basket = getBasket();
        const productIndex = basket.findIndex(item => item.productId === productId);
        if(basket[productIndex].count!=1){
            basket[productIndex].count-=1;
            setBasket(basket);
        }
        else{
            removeFromBasket(productId)
        }

    }
}
export const removeFromBasket = (productId) => {
    let basket = getBasket();
    basket = basket.filter(item => item.productId !== productId);
    setBasket(basket);
};
