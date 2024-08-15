import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesSlice';
import widgetsReducer from './widgetsSlice';

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    widgets: widgetsReducer,
  },
});
