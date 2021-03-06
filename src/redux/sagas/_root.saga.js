import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import dogregSaga from './dogregister.saga';
import imgInfoSaga from './imageupload.saga';
import dogSaga from './dog.saga';
import oDogSaga from './otherdog.saga';
import dogeditSaga from './dogedit.saga';
import piceditSaga from './picedit.saga';
import deleteUser from './deleteuser.saga';
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    dogregSaga(),
    imgInfoSaga(),
    dogSaga(),
    oDogSaga(),
    dogeditSaga(),
    piceditSaga(),
    deleteUser(),
  ]);
}
