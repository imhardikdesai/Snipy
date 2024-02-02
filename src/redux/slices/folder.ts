import { createSlice } from "@reduxjs/toolkit";

// ----------------------------------------------------------------------
type stateTypes = {
  modalOpen: boolean;
  modalData: null | {
    name: string;
    id: string;
  };
};
const initialState: stateTypes = {
  modalOpen: false,
  modalData: null,
};

const slice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    handleUpdateFolderModal: (state, action) => {
      state.modalOpen = action.payload;
    },
    handleSetFolderModalData: (state, action) => {
      state.modalData = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { handleUpdateFolderModal, handleSetFolderModalData } =
  slice.actions;

// Export the async action
export {};
