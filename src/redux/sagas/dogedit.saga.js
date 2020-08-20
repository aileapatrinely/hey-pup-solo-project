import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* editDog(action) {
  try {
    yield axios.put(`/api/edit/${action.payload.id}`, action.payload);
    yield put({ type: 'FETCH_DOG', payload: action.payload.id });
  } catch (error) {
    console.log('Dog get request failed', error);
  }
}

function* dogeditSaga() {
  yield takeLatest('UPDATE_DOG', editDog);
}

export default dogeditSaga;
