import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';


describe('Card', () => {
  let wrapper;
  const player = {
    first_name: "Lebron",
    last_name: "James",
    height_feet: 6,
    height_inches: 8,
    weight_pounds: 250,
    position: "F",
    id: 237,
    team: {
      full_name: "Los Angeles Lakers",
    }
  }
  beforeEach(() => {
    wrapper = shallow(
      <Card 
        player={player}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

});