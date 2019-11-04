import React from 'react';
import { shallow } from 'enzyme';
import { NavBar, mapStateToProps, mapDispatchToProps } from './NavBar';
import { searchByName} from '../../apiCalls/apiCalls';
import { setPlayers } from '../../actions'

jest.mock('../../apiCalls/apiCalls.js')

describe('NavBar', () => {
  let wrapper, mockEvent, mockPlayers;

  beforeEach(() => {
    wrapper = shallow(<NavBar />);

    mockEvent = {
      preventDefault: jest.fn(),
      target: {
        name: 'lastName', value: 'Jokic'
      }
    }

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

    searchByName.mockImplementation(() => {
      return Promise.resolve()
    })
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call handleChange on change in search fields', () => {
    wrapper.instance().handleChange = jest.fn()

    wrapper.find('.lastNameInput').simulate('change', mockEvent);

    expect(wrapper.instance().handleChange).toHaveBeenCalled();
  })

  it('should update state when handleChange is called', () => {
    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('lastName')).toEqual('Jokic')
  })

  it('should call searchByName when getPlayer is called', async () => {
    // setPlayers = jest.fn()
    
    // wrapper.instance().getPlayer(mockEvent)

    // expect(searchByName).toHaveBeenCalled();
  })

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

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a setPlayers action when getPlayer is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setPlayers(mockPlayers);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setPlayers(mockPlayers);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})