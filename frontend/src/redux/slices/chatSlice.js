import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    selectedConversation: null,
  },
  reducers: {
    setMessagesReducer(state, action) {
      state.messages = [...state.messages, action.payload];
    },
    setSelectedConversationReducer(state, action) {
      state.selectedConversation = action.payload;
    },
  },
});

export const { setMessagesReducer, setSelectedConversationReducer } =
  chatSlice.actions;
export default chatSlice.reducer;
