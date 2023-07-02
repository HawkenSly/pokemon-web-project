export const getFavorites = () => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  };
  
  // Update favorites in localStorage
  export const updateFavorites = (pokemon) => {
    const favorites = getFavorites();
    const index = favorites.findIndex((item) => item.name === pokemon.name);
  
    if (index !== -1) {
      // Remove from favorites if already favorited
      favorites.splice(index, 1);
    } else {
      // Add to favorites if not favorited
      favorites.push(pokemon);
    }
  
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  
  // Retrieve favorites from localStorage
  export const Favorites = getFavorites();