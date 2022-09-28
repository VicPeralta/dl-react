import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  maintenance: 'students',
};

const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    updateMaintenance: (state, action) => (
      {
        ...state,
        maintenance: action.payload,
      }
    ),
  },
});

export const { updateMaintenance } = appConfigSlice.actions;
export default appConfigSlice.reducer;
