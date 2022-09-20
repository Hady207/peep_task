import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { randomHex } from "../../utils/randomHex";

interface ColorsState {
  favHash: {
    [key: number]: boolean;
  };
  historyPrimaryColor: string[];
  primaryColor: string | null;
  generatedColors: string[];
  themeMode: "light" | "dark";
}

const initialState: ColorsState = {
  favHash: {},
  historyPrimaryColor: [],
  primaryColor: null,
  generatedColors: [],
  themeMode: "light",
};

const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    toggleFav(state, action: PayloadAction<number>) {
      if (state.favHash[action.payload]) {
        state.favHash[action.payload] = false;
      } else {
        state.favHash[action.payload] = true;
      }
    },
    generateRandomColor(state) {
      for (let i = 0; i < 8; i++) {
        if (i in state.favHash && state.favHash[i]) {
          continue;
        } else if (i in state.favHash && !state.favHash[i]) {
          state.generatedColors[i] = `#${randomHex()}`;
        } else {
          state.favHash[i] = false;
          state.generatedColors[i] = `#${randomHex()}`;
        }
      }
    },
    setPrimaryColor(state, action: PayloadAction<string>) {
      state.primaryColor = action.payload;
      if (state.historyPrimaryColor.length < 5) {
        state.historyPrimaryColor.push(action.payload);
      } else {
        // remove first element in the array and stay immutable
        const newArr = state.historyPrimaryColor;
        newArr.shift();
        state.historyPrimaryColor = newArr;
        state.historyPrimaryColor.push(action.payload);
      }
    },
    changeThemeMode(state, action: PayloadAction<"light" | "dark">) {
      state.themeMode = action.payload;
    },
  },
});

export const {
  toggleFav,
  changeThemeMode,
  generateRandomColor,
  setPrimaryColor,
} = colorsSlice.actions;

export default colorsSlice.reducer;
