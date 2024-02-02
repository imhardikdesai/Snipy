import { createSlice } from "@reduxjs/toolkit";

// ----------------------------------------------------------------------
type stateTypes = {
  modalOpen: boolean;
};
const initialState: stateTypes = {
  modalOpen: false,
};

const slice = createSlice({
  name: "snippet",
  initialState,
  reducers: {
    handleUpdateSnippetModal: (state, action) => {
      state.modalOpen = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { handleUpdateSnippetModal } = slice.actions;

// Export the async action
export {};
