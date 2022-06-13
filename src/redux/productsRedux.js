/* selectors */
export const getAllProducts = (state) => state.products;
export const getCountProducts = ({ products }) => products.length;

export const getNewProducts = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
