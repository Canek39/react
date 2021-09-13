import { ADD_MESSAGE_ACTION } from "./constants";

const initialState = {
  // {[chatId]: [{id, text, author}],[chatId]: [{id, text, author}],[chatId]: [{id, text, author}], }
  messageList: {},
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_ACTION: {
      const currentList = state.messageList[action.payload.chatId] || [];

      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.payload.chatId]: [...currentList, action.payload.message],
        },
      };
    }
    default:
      return state;
  }
};
