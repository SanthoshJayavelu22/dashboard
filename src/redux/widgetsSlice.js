import { createSlice } from '@reduxjs/toolkit';
import data from '../widgetData.json';

const initialWidgets = [
  { id: 1, name: 'Security Overview', content: 'Security Overview content...' },
  { id: 2, name: 'Compliance Status', content: 'Compliance Status content...' },
  { id: 3, name: 'Resource Summary', content: 'Resource Summary content...' },
];

const widgetsSlice = createSlice({
  name: 'widgets',
  initialState: data.widgets,
  reducers: {
   
    addGlobalWidget: (state, action) => {
      const newWidget = action.payload;
      state.push(newWidget);
    },
  },
});

export const { addGlobalWidget } = widgetsSlice.actions;
export default widgetsSlice.reducer;
