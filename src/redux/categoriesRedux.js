/* selectors */
export const getAllCategories = state => state.categories;
export const getCountCategories = ({ categories }) => categories.length;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
