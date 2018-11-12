import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchHeroes, fetchHeroId } from '../api/api';

function* fetchHeroesToWatch() {
    try {
       const heroes = yield call(fetchHeroes);
       yield put({type: "FETCH_HEROES_SUCESS", heroes: heroes});
    } catch (e) {
       yield put({type: "FETCH_HEROES_ERROR", message: e.message});
    }
 }

function* fetchHero(action) {
    try {
      const heroId = yield call(fetchHeroId,action.id);
      yield put({type: "FECT_HERO_SUCESS", heroId});
    }catch (e) {
      yield put({type: "FETCH_HERO_ERROR", message: e.message});
    }
}

function* mySaga() {
    yield takeEvery("FETCH_HEROES_REQUEST", fetchHeroesToWatch);
    yield takeEvery("FECT_HERO_REQUEST", fetchHero);
}

  export default mySaga;
