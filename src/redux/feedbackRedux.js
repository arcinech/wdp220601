/* selectors */
export const getAllFeedbacks = state => state.feedbacks;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
