import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* deleteUser(action) {
  try {
    yield axios.delete(`/api/user/${action.payload.id}`, action.payload.id);
  } catch (error) {
    console.log('Delete user failed', error);
  }
}

function* deleteUserSaga() {
  yield takeLatest('DELETE_USER', deleteUser);
}

export default deleteUserSaga;
