import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ColorsState {
  likedColors: string[];
  historyPrimaryColor: string[];
  primaryColor: string | null;
  isDark: boolean;
}

const initialState: ColorsState = {
  likedColors: [],
  historyPrimaryColor: [],
  primaryColor: null,
  isDark: false,
};

const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<string>) {
      if (state.likedColors.includes(action.payload)) {
        state.likedColors = state.likedColors.filter(
          (color) => color !== action.payload
        );
      } else {
        state.likedColors.push(action.payload);
      }
    },
  },
});

export const { toggleLike } = colorsSlice.actions;

export default colorsSlice.reducer;
