import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postImgUrl(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'applicaton/json' },
      withCredentials: true,
    };

    const data = {
      imageUrl: action.payload,
    };
    const response = yield axios.post('/api/imageurl', data, config);
  } catch (error) {
    console.log('Image URL post failed:', error);
  }
}

function* imgInfoSaga() {
  yield takeLatest('POST_IMG_URL', postImgUrl);
}

export default imgInfoSaga;
