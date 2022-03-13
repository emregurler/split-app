export const localStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === 'splitSizes/setSplitSize') {
    const sizeReducer = store.getState().splitSizeReducer;
    const newSizes = { ...sizeReducer, [action.payload.name]: action.payload.sizes };
    localStorage.setItem('split-sizes', JSON.stringify(newSizes));
  }
  next(action);
};
