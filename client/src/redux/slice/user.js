import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {
    _id: "",
    user_name: "",
    content: "",
    isEdited: "",
  },
  reducers:{
    createUserSlice: (state, action) => {
        state = action.payload;
        return state;
    },
    getUserSlice: (state, action) => {
        state = action.payload;
        return state;
    },
    editUserSlice: (state, action) => {
        state = action.payload;
        return state;
    }
  }
});

export const { createUserSlice, getUserSlice, editUserSlice } = userSlice.actions;
export default userSlice.reducer;
