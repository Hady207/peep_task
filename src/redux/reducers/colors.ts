import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ColorsState {
  likedColors: string[];
  historyPrimaryColor: string[];
  primaryColor: string | null;
  themeMode: "light" | "dark";
}

const initialState: ColorsState = {
  likedColors: [],
  historyPrimaryColor: [],
  primaryColor: null,
  themeMode: "light",
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
    changeThemeMode(state, action: PayloadAction<"light" | "dark">) {
      state.themeMode = action.payload;
    },
  },
});

export const { toggleLike, changeThemeMode } = colorsSlice.actions;

export default colorsSlice.reducer;
