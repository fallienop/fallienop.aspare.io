export const getFavorites = () => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
};

export const setFavorites = (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const toggleFavorite = (productId) => {
    if (productId != undefined) {
        console.log(productId)
        const favorites = getFavorites();
        // const productIndex = favorites.findIndex(item => item.productId === productId);
        if (!favorites.includes(productId)) {
           favorites.push(productId)
        } else {
        favorites.filter(x=>x!=productId);
        }

        setFavorites(favorites);
    }
};