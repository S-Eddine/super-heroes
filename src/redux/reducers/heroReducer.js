import { FECT_HERO_ERROR, FECT_HERO_SUCESS, FECT_HERO_REQUEST } from '../constants/index';

export default function heroReducer(state = [], action){
    switch(action.type){
        case FECT_HERO_REQUEST:
            return {isFetching: true};

        case FECT_HERO_ERROR:
            action.isFetching = false;
            return [...state, action];
        
        case FECT_HERO_SUCESS:
            action.isFetching = false;
            return {heroId : action.heroId, isFetching : false}
        
        default:
            return null;
    }
}
