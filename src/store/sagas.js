import { takeLatest, put, call, select } from "redux-saga/effects";
import { delay } from "redux-saga";

function apiget() {
  return new Promise((resolver, reject) => {
    setTimeout(() => {
      resolver([
        { id: 1, text: "Fazer Café 1" },
        { id: 2, text: "Fazer Café 2" },
        { id: 3, text: "Fazer Café 3" },
        { id: 4, text: "Fazer Café 4" },
        { id: 5, text: "Fazer Café 5" }
      ]);
    }, 10);
  });
}

function* getTodoList() {
  try {
    const response = yield call(apiget);
    yield put({ type: "SUCCESS_TODO_LIST", payload: { data: response } });
  } catch (err) {
    yield put({ type: "FAILURE_TODO_LIST" });
  }
}

export default function* root() {
  yield [takeLatest("REQUEST_TODO_LIST", getTodoList)];
}
