import { configureStore, createSlice } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof rootReducer.getState>;
export type AppDispatch = typeof rootReducer.dispatch;
export type CartStateType = {
  cart: {
    id: number;
    name: string;
    count: number;
  }[];
};
export type UserStateType = {
  user: {
    name: string;
    age: number;
  };
};

export const cartInitialState = [
  { id: 0, name: "White and Black", count: 2 },
  { id: 2, name: "Grey Yordan", count: 1 },
];

const user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    increase(state, action) {
      state.age = state.age + action.payload;
    },
  },
});

const cart = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    // addCount(state, action) {
    //   const num = state.findIndex((a) => {
    //     return a.id === action.payload;
    //   });
    //   state[num].count++;
    // },
    addCount(state, action) {
      state[action.payload].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

const rootReducer = configureStore({
  reducer: { user: user.reducer, cart: cart.reducer },
});

export const { increase } = user.actions;
export const { addCount } = cart.actions;
export const { addItem } = cart.actions;

export default rootReducer;
