import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchHeroes } from '../api/api';

function* fetchHeroesToWatch(action) {
    try {
       const heroes = yield call(fetchHeroes);
       yield put({type: "FETCH_HEROES_SUCESS", heroes: heroes});
    } catch (e) {
       yield put({type: "FETCH_HEROES_ERROR", message: e.message});
    }
 }

 function* mySaga() {
    yield takeEvery("FETCH_HEROES_REQUEST", fetchHeroesToWatch);
  }

  export default mySaga;
