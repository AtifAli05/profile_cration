import { combineReducers } from "redux";

function onLoginnSystem(state = false, action) {
  switch (action.type) {
    case "AuthorizationINfo":
      return action.payload;
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  //sIGN OFF REDUX
  onLoginnSystem: onLoginnSystem,
});

export default rootReducer;
