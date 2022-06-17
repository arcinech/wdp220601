/* selectors */
export const getAllProducts = state => state.products;
export const getCountProducts = ({ products }) => products.length;

export const getNewProducts = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action creators */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_FAVORITE = createActionName('SET_FAVORITE');
const ADD_COMPARE = createActionName('ADD_COMPARE');
const REMOVE_COMPARE = createActionName('REMOVE_COMPARE');

/* action creators */
export const setFavorite = payload => ({ type: SET_FAVORITE, payload });
export const addCompare = payload => ({ payload, type: ADD_COMPARE });

export const removeCompare = payload => {
  return { payload, type: REMOVE_COMPARE };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case 'SET_FAVORITE':
      return statePart.map(product =>
        product.id === action.payload.id ? { ...product, ...action.payload } : product
      );
    case ADD_COMPARE: {
      return statePart.map(item => {
        if (item.id !== action.payload) return item;
        return {
          ...item,
          compare: true,
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
}
