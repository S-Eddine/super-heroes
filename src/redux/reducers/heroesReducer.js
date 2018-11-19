import { FETCH_HEROES_ERROR, FETCH_HEROES_SUCESS } from '../constants/index';

export default function heroesReducer(state = [], action){
    switch(action.type){
        
        case FETCH_HEROES_SUCESS:
            return [...state, action.heroes];
        
        case FETCH_HEROES_ERROR: 
            return state;
        
        default:
            return state;
    }
}
