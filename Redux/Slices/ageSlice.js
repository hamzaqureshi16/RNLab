import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 18,
};

export const ageSlice = createSlice({
  name: "age",
  initialState,
  reducers: {
    addAge: (state) => {
      state.value += 1;
    },
    subAge: (state) => {
      state.value -= 1;
    },

    setAge: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addAge, subAge, setAge } = ageSlice.actions;

export default ageSlice.reducer;
