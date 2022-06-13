/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_COMPARE = createActionName('ADD_COMPARE');
const REMOVE_COMPARE = createActionName('REMOVE_COMPARE');

/* action creators */
export const addCompare = payload => {
  return { payload, type: ADD_COMPARE };
};

export const removeCompare = payload => {
  return { payload, type: REMOVE_COMPARE };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
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
