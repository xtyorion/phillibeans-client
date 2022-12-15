import {ISetting} from "../interfaces/setting.interface";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialSettingState = {
  "theme": "",
}

const settingSlice = createSlice({
  name: "setting",
  initialState: initialSettingState,
  reducers: {
    setTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
  },
});
export default settingSlice;