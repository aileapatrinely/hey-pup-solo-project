import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* deleteUser(action) {
  try {
    const response = yield axios.delete(
      `/api/delete/${action.payload.id}`,
      action.payload
    );
    yield put({ type: 'FETCH_DOG', payload: action.payload.id });
  } catch (error) {
    console.log('Delet user failed', error);
  }
}

function* deleteUserSaga() {
  yield takeLatest('DELETE_USER', deleteUser);
}

export default deleteUserSaga;
