import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      let found = false;
      for(const item of state.items){
        if(item.id===action.payload.id){
          found = true;
          item.counter++;
        }
      }
      if(!found){
        action.payload.counter = 1;
        state.items = [...state.items, action.payload];
      }
    },
    removeFromBasket: (state, action) => {
      for(const item of state.items){
        if(item.id===action.payload.id){
          item.counter--;
        }
      }
      state.items = state.items.filter((item)=>item.counter!==0);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total,item)=>total+item.price*item.counter,0)

export default basketSlice.reducer;
