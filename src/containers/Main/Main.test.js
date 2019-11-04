import React from 'react';
import { shallow } from 'enzyme';
import { Main, mapStateToProps } from './Main';
import { getGameByGameStats } from '../../apiCalls/apiCalls';

jest.mock('../../apiCalls/apiCalls.js')

describe('Main', ( )=> {
  let wrapper, mockPlayers, mockEvent, mockStats;

  beforeEach(() => {
    mockEvent = {
      preventDefault: jest.fn()
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

    mockStats = [
      { 0: 
        {
        "id":29,
        "ast":2,
        "blk":2,
        "dreb":8,
        "fg3_pct":0.25,
        "fg3a":4,
        "fg3m":1,
        "fg_pct":0.429,
        "fga":21,
        "fgm":9,
        "ft_pct":0.8,
        "fta":5,
        "ftm":4,
        "game":{
          "id":1,
          "date":"2018-10-16T00:00:00.000Z",
          "home_team_id":2,
          "home_team_score":105,
          "season":2018,
          "visitor_team_id":23,
          "visitor_team_score":87
        },
        "min":"36:49",
        "oreb":2,
        "pf":3,
        "player":{
          "id":246,
          "first_name":"Lebron",
          "last_name":"James",
          "position":"F",
          "team_id":23
        },
        "pts":23,
        "reb":10,
        "stl":1,
        "team":{
          "id":23,
          "abbreviation":"LAL",
          "city":"Los Angeles",
          "conference":"West",
          "division":"Pacific",
          "full_name":"Los Angeles Lakers",
          "name":"Lakers"
        },
        "turnover":5
        }
      }
    ]

    getGameByGameStats.mockImplementation((id) => {
      return Promise.resolve(mockStats)
    })

    wrapper = shallow(<Main players={mockPlayers}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call comparePlayers on click', () => {
    wrapper.instance().comparePlayers = jest.fn()

    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().comparePlayers).toHaveBeenCalled();
  })

  it('should call getGameByGameStats when comparePlayers is called', () => {
    wrapper.instance().comparePlayers(mockEvent, mockPlayers);

    expect(getGameByGameStats).toHaveBeenCalled();
  })

  it('should update state when comparePlayers is called', async () => {
    const expected = [ { 237: mockStats } ]
    await wrapper.instance().comparePlayers(mockEvent, mockPlayers);
    expect(wrapper.state('gameStats')).toEqual(expected)
  })
})