/* selectors */
export const getAllBlogs = state => state.blogs;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
