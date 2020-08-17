import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchOther() {
  try {
    const response = yield axios.get('/api/fetch');
    yield put({ type: 'SET_OTHER', payload: response.data });
  } catch (error) {
    console.log('Dog get request failed', error);
  }
}

function* otherdogSaga() {
  yield takeLatest('FETCH_OTHER', fetchOther);
}

export default otherdogSaga;
