import {
  TOGGLE_SHOW_USER_NAME_ACTION,
  CHANGE_USER_NAME_ACTION,
} from "./constants";

const initialState = {
  userName: "",
  showUserName: true,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_USER_NAME_ACTION: {
      return {
        ...state,
        showUserName: !state.showUserName,
      };
    }
    case CHANGE_USER_NAME_ACTION: {
      console.log(state);

      const a = { ...state };

      const b = { userName: state.userName, showUserName: state.showUserName };
      console.log(a, b);
      return {
        ...state,
        userName: action.payload.name,
      };
    }
    default:
      return state;
  }
};
