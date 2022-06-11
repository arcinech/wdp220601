/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const setFavorite = payload => ({ type: 'SET_FAVORITE', payload });
/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case 'SET_FAVORITE':
      return statePart.map(product =>
        product.id === action.payload.id ? { ...product, ...action.payload } : product
      );
    default:
      return statePart;
  }
}
