import { createSlice } from "@reduxjs/toolkit";

// ----------------------------------------------------------------------
type stateTypes = {
  authStatus: boolean;
};
const initialState: stateTypes = {
  authStatus: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleUpdateAuthStatus: (state) => {
      state.authStatus = !state.authStatus;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { handleUpdateAuthStatus } = slice.actions;

// Export the async action
export {};
