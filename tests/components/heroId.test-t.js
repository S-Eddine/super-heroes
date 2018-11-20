import { shallow } from 'enzyme';
import React from 'react';
import HeroId from '../../src/components/heroId/index';

describe('heroId', () => {
    it('renders correctly', () => {
     const heroIdReducer = {
        isFetching : false
     };

      const wrapper = shallow(<HeroId heroIdReducer={heroIdReducer}/>);
      expect(wrapper).toMatchSnapshot();
      // On the first run of this test, Jest will generate a snapshot file automatically.
    });
  });
  