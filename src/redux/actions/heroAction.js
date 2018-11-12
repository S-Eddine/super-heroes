import { FECT_HERO_REQUEST } from '../constants/index';

export function fectchHero(id) {
    return {
        type : FECT_HERO_REQUEST,
        id,
    }
};
