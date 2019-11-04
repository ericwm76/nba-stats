import {players} from '../players'

describe('players', () => {
  it('should return the initial state', () => {
      const expected = []
      const result = players(undefined, [])

      expect(result).toEqual(expected)
  });
  
  it('should be able to return players', () => {
      const initialState = [];
      const action = {
        type: 'SET_PLAYERS', 
        players: [
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
      }

      const expected = [
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

      const result = players(initialState, action)

      expect(result).toEqual(expected)
  })
})