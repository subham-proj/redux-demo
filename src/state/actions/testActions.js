import { TEST_FAIL, TEST_REQUEST, TEST_SUCCESS } from "../constants/testConstants";
import axios from 'axios';

const api = "https://jsonplaceholder.typicode.com/todo/";

export const testAction = (id) => async(dispatch) => {
  try {
    dispatch({
      type: TEST_REQUEST,
    });

    const res = await axios.get(api+id);

    dispatch({
      type: TEST_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: TEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
