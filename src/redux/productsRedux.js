/* selectors */
export const getAllProducts = state => state.products;
export const getCountProducts = ({ products }) => products.length;
export const getProductById = ({ products }, productId) =>
  products.find(product => product.id === productId);

export const getNewProducts = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action creators */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_FAVORITE = createActionName('SET_FAVORITE');

const TOGGLE_COMPARE = createActionName('TOGGLE_COMPARE');
const REMOVE_COMPARE = createActionName('REMOVE_COMPARE');
const SET_PRODUCT_RATING = createActionName('SET_PRODUCT_RATING');

/* action creators */
export const setFavorite = payload => ({ type: SET_FAVORITE, payload });
export const toggleCompare = payload => ({ payload, type: TOGGLE_COMPARE });
export const setProductRating = payload => ({ type: SET_PRODUCT_RATING, payload });

export const removeCompare = payload => {
  return { payload, type: REMOVE_COMPARE };
};

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
    case TOGGLE_COMPARE: {
      return statePart.map(item => {
        if (item.id !== action.payload.id) return item;
        return {
          ...item,
          compare: !item.compare,
        };
      });
    }
    case REMOVE_COMPARE: {
      return statePart.map(item => {
        if (item.id !== action.payload) return item;
        return {
          ...item,
          compare: false,
        };
      });
    }
    default:
      return statePart;
  }
};

export default productsReducer;
