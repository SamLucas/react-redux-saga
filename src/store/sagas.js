import { takeLatest, put } from "redux-saga/effects";
import { delay } from "redux-saga";

function* asyncAddTodo(action) {
  yield delay(2000);
  yield put({ type: "ADD_TODO", payload: { text: action.payload.text } });
}

export default function* root() {
  yield [takeLatest("ASYNC_ADD_TODO", asyncAddTodo)];
}
