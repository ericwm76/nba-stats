export const players = (state = [], action) => {
  switch(action.type)  {
    case 'SET_PLAYERS':
      return [...state, ...action.players]
    default:
      return state  
  }
}