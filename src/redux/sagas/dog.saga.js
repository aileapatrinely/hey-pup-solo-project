import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchDog() {
  try {
    const response = yield axios.get('/api/dog');
    yield put({ type: 'SET_DOG', payload: response.data });
  } catch (error) {
    console.log('Dog get request failed', error);
  }
}

function* dogSaga() {
  yield takeLatest('FETCH_DOG', fetchDog);
}

export default dogSaga;
