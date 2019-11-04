import { searchByName, getPlayerSeasonAvgs, getGameByGameStats } from './apiCalls'

describe('API Calls', () => {
  describe('searchByName', () => {
    let mockResponse = [
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
  
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });
  
    it('should call fetch with the correct url', () => {
      searchByName('LeBron', 'James');
  
      expect(window.fetch).toHaveBeenCalledWith("https://www.balldontlie.io/api/v1/players/?search=LeBron%20James&per_page=100");
    });

    it('should return an array of players (HAPPY)', () => {
      expect(searchByName('LeBron', 'James')).resolves.toEqual(mockResponse);
    });
    
    it('should return an error (SAD)', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      
      expect(searchByName('LeBron', 'James')).rejects.toEqual(Error('Could not find player.'));
    });  
  });

  describe('getPlayerSeasonAvgs', () => {
    let mockResponse = [
      {
      ast: 11.17,
      blk: 0.67,
      dreb: 7,
      fg3_pct: 0.281,
      fg3a: 5.33,
      fg3m: 1.5,
      fg_pct: 0.474,
      fga: 19.33,
      fgm: 9.17,
      ft_pct: 0.756,
      fta: 7.5,
      ftm: 5.67,
      games_played: 6,
      min: "34:57",
      oreb: 0.83,
      pf: 1.67,
      player_id: 237,
      pts: 25.5,
      reb: 7.83,
      season: 2019,
      stl: 1.5,
      turnover: 4.17,
      }
    ]
  
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it('should call fetch with the correct url', () => {
      getPlayerSeasonAvgs(237);
  
      expect(window.fetch).toHaveBeenCalledWith("https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237");
    });

    it('should return an array of player objects containing an array of game objects (HAPPY)', () => {
      expect(getPlayerSeasonAvgs(237)).resolves.toEqual(mockResponse);
    });
    
    it('should return an error (SAD)', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      
      expect(getPlayerSeasonAvgs(237)).rejects.toEqual(Error('Could not get player statistics.'));
    });  
  });

  describe('getGameByGameStats', () => {
    let mockResponse = [
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
  
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it('should call fetch with the correct url', () => {
      getGameByGameStats(237);
  
      expect(window.fetch).toHaveBeenCalledWith("https://www.balldontlie.io/api/v1/stats?per_page=100&seasons[]=2019&player_ids[]=237");
    });

    it('should return an array of player objects containing an array of game objects (HAPPY)', () => {
      expect(getGameByGameStats(237)).resolves.toEqual(mockResponse);
    });
    
    it('should return an error (SAD)', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      
      expect(getGameByGameStats(237)).rejects.toEqual(Error('Could not get game-by-game stats.'));
    });  
  });
})