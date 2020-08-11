import { put, takeLatest, putResolve } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* registerDog(action) {
  try {
    // passes the username and password from the payload to the server
    yield axios.post('/api/dog/register', action.payload);

    yield put({ type: 'SET_DOG', payload: action.payload });
  } catch (error) {
    console.log('Error with user registration:', error);
  }
}

function* dogregistrationSaga() {
  yield takeLatest('REGISTER_DOG', registerDog);
}

export default dogregistrationSaga;
