import * as actions from '.';


describe('actions', () => {
  describe('setPlayers', () => {
    it('should have type of SET_PLAYERS', () => {
      const mockPlayers = [
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

      const expectedAction = {
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
      
      const result = actions.setPlayers(mockPlayers)
      
      expect(result).toEqual(expectedAction)
    })  
  })
})