import heroesReducer from '../../src/redux/reducers/heroesReducer';
import heroReducer from '../../src/redux/reducers/heroReducer';
import { FECT_HERO_REQUEST, FECT_HERO_ERROR, FECT_HERO_SUCESS, FETCH_HEROES_SUCESS, FETCH_HEROES_ERROR } from '../../src/redux/constants/index';

describe('Reducers test', () => {
    it('heroReducer should retune the initial state', () => {
        expect(heroReducer(undefined, {})).toEqual(null)
    })

    it('should hadne FECT_HERO_REQUEST', () => {
        expect(heroReducer([], {
            type: FECT_HERO_REQUEST,
        })
        ).toEqual(
            {isFetching: true}
        )
    })

    it('should hadne FECT_HERO_ERROR', () => {
        expect(heroReducer([], {
            type: FECT_HERO_ERROR,
        })
        ).toEqual(
            [{isFetching: false, type: FECT_HERO_ERROR}]
        )
    })

    it('should hadne FECT_HERO_SUCESS', () => {
        expect(heroReducer([], {
            type: FECT_HERO_SUCESS,
        })
        ).toEqual(
            {"heroId": undefined, isFetching: false}
        )
    })

    it('heroesReducer should retune the initial state', () => {
        expect(heroesReducer(undefined, {})).toEqual([
        ])
    })

    it('should hadne FETCH_HEROES_SUCESS', () => {
        expect(heroesReducer([], {
            type: FETCH_HEROES_SUCESS,
        })
        ).toEqual(
            [undefined]
        )
    })

    it('should hadne FETCH_HEROES_ERROR', () => {
        expect(heroesReducer([], {
            type: FETCH_HEROES_ERROR,
        })
        ).toEqual(
            []
        )
    })
})
