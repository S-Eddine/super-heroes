import { shallow } from 'enzyme';
import React from 'react';
import heroGrid from '../../src/components/heroes/heroGrid/index';

describe('heroGrid', () => {
  it('renders correctly', () => {

    const wrapper = shallow(<heroGrid />);
    expect(wrapper).toMatchSnapshot();
  });
});
