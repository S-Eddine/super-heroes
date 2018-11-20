import { shallow } from 'enzyme';
import React from 'react';
import HeroCard from '../../src/components/heroId/heroCard';

describe('heroCard', () => {
  it('renders correctly', () => {
    const heroId = { 
      comics : {
        items : ["comics"]
      },
      series : {
        items : ["series"]
      },
      thumbnail : {
        path: 'pathTest',
        extension: '.jpg'
      },
      name: "test",

    }
    const wrapper = shallow(<HeroCard heroId={heroId} />);
    expect(wrapper).toMatchSnapshot();
  });
});
