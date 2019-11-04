import React from 'react';
import { shallow } from 'enzyme';
import { Chart } from './Chart';

describe('Chart', () => {
  let wrapper;
  const mockPlayers = [{
    first_name: "Nikola",
    last_name: "Jokic",
    height_feet: 7,
    height_inches: 0,
    weight_pounds: 280,
    position: "C",
    id: 246,
    team: {
      full_name: "Denver Nuggets",
    }
  },
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
  }];

  const mockStats = [
    { 237: [
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
    },
    { 246: [
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
          "first_name":"Nikola",
          "last_name":"Jokic",
          "position":"C",
          "team_id":23
        },
        "pts":23,
        "reb":10,
        "stl":1,
        "team":{
          "id":23,
          "abbreviation":"DEN",
          "city":"Denver",
          "conference":"West",
          "division":"Mountain",
          "full_name":"Denver Nuggets",
          "name":"Nuggets"
        },
        "turnover":5
          }
        }
      ]
    }
  ]
  
  beforeEach(() => {
    wrapper = shallow(<Chart stats={mockStats} players={mockPlayers}/>);
    wrapper.instance().createLabels = jest.fn();    
  })

  it('should call createLabels and createDatasets on mount', () => {
    wrapper.instance().componentDidMount();

    expect(wrapper.instance().createLabels).toHaveBeenCalled();
  })

  it('should update labels in state when createLabels is called', () => {
  })
})