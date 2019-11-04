import React from 'react';
import { shallow } from 'enzyme';
import { PlayerStats, mapStateToProps } from './PlayerStats';
import { getPlayerSeasonAvgs } from '../../apiCalls/apiCalls' 

describe('PlayerStats', () => {
  let wrapper, mockPlayers;

  beforeEach(() => {
    // wrapper = shallow(<PlayerStats/>)
    // console.log(wrapper.instance.props)
    // wrapper.instance().props.match = {
    //   params: {
    //     id: 237
    //   }
    // }

    mockPlayers = [
      {
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
    ]
  })

  // it('should match the snapshot', () => {
  //   // expect(wrapper).toMatchSnapshot()
  // })
  

  describe('mapStateToProps', () => {
    it('should return an object with the players array', () => {
      const mockState = {
        players: mockPlayers,
        filter: 'SET_PLAYERS'
      };
      const expected = {
        players: mockPlayers
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    })
  })
})