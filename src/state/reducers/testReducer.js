import {
  TEST_FAIL,
  TEST_REQUEST,
  TEST_SUCCESS,
} from "../constants/testConstants";

export const testReducer = (state = {}, action) => {
  switch (action.type) {
    case TEST_REQUEST:
      return { loading: true };
    case TEST_SUCCESS:
      return { loading: false, data: action.payload };
    case TEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
