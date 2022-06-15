/* selectors */
export const getAllProducts = state => state.products;
export const getCountProducts = ({ products }) => products.length;

export const getNewProducts = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_FAVORITE = createActionName('SET_FAVORITE');
const SET_PRODUCT_RATING = createActionName('SET_PRODUCT_RATING');

/* action creators */
export const setFavorite = payload => ({ type: SET_FAVORITE, payload });
export const setProductRating = payload => ({ type: SET_PRODUCT_RATING, payload });

/* reducer */

const productsReducer = function(statePart = [], action) {
  switch (action.type) {
    case SET_FAVORITE:
      return statePart.map(product =>
        product.id === action.payload.id ? { ...product, ...action.payload } : product
      );
    case SET_PRODUCT_RATING:
      return statePart.map(product =>
        product.id === action.payload.id ? { ...product, ...action.payload } : product
      );
    default:
      return statePart;
  }
};

export default productsReducer;
