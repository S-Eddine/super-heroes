import { FETCH_HEROES_REQUEST } from '../constants/index';

export function fetchHeroes() {
    return {type: FETCH_HEROES_REQUEST}
}
