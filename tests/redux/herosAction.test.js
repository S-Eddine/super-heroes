import {fetchHeroes} from '../../src/redux/actions/heroesAction';
import { fetchHero } from '../../src/redux/actions/heroAction';
import { FETCH_HEROES_REQUEST, FECT_HERO_REQUEST } from '../../src/redux/constants/index';

describe('Heroes actions', () => {
  it('should create an action to fetch heroes', () => {
    const expectedAction = {
      type: FETCH_HEROES_REQUEST,
    }
    expect(fetchHeroes()).toEqual(expectedAction)
  })
})

describe('Hero actions', () => {
    it('should create an action to fetch hero informations by id', () => {
        const id = 'heroId';
      const expectedAction = {
        type: FECT_HERO_REQUEST,
        id
      }
      expect(fetchHero(id)).toEqual(expectedAction)
    })
  })
