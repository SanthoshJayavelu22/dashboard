import { createSlice } from '@reduxjs/toolkit';
import data from '../widgetData.json';



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
