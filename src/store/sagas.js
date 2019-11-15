import { takeLatest, put, call } from "redux-saga/effects";
import { delay } from "redux-saga";

function apiget(text) {
  return new Promise((resolver, reject) => {
    setTimeout(() => {
      resolver(text + "da RocketSeat");
    }, 2000);
  });
}

function* asyncAddTodo(action) {
  const response = yield call(apiget, action.payload.text);
  yield put({ type: "ADD_TODO", payload: { text: response } });
}

export default function* root() {
  yield [takeLatest("ASYNC_ADD_TODO", asyncAddTodo)];
}
