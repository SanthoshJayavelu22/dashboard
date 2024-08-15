import { createSlice } from '@reduxjs/toolkit';
import data from '../categoryData.json';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: data.categories,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.find((cat) => cat.id === categoryId);
      if (category) {
        category.widgets.push({ id: Date.now(), ...widget });
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.find((cat) => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter((widget) => widget.id !== widgetId);
      }
    },
  },
});

export const { addWidget, removeWidget } = categoriesSlice.actions;
export default categoriesSlice.reducer;
