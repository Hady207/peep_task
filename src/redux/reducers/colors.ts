import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { randomHex } from "../../utils/randomHex";

interface ColorsState {
  likedColors: string[];
  historyPrimaryColor: string[];
  primaryColor: string | null;
  generatedColors: string[];
  themeMode: "light" | "dark";
}

const initialState: ColorsState = {
  likedColors: [],
  historyPrimaryColor: [],
  primaryColor: null,
  generatedColors: [],
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
    generateRandomColor(state) {
      state.generatedColors = [];
      for (let i = 0; i < 8; i++) {
        state.generatedColors.push(`#${randomHex()}`);
      }
    },
    changeThemeMode(state, action: PayloadAction<"light" | "dark">) {
      state.themeMode = action.payload;
    },
  },
});

export const { toggleLike, changeThemeMode, generateRandomColor } =
  colorsSlice.actions;

export default colorsSlice.reducer;
