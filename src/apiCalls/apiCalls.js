const baseUrl = 'https://www.balldontlie.io/api/v1'

export const searchByName = async (firstName, lastName) => {
  let response = await fetch(`${baseUrl}/players/?search=${firstName}%20${lastName}&per_page=100`);

  if(!response.ok) {

  }

  let data = await response.json();

  return data.data
}

export const getPlayerSeasonAvgs = async (id) => {
  let response = await fetch(`${baseUrl}/season_averages?player_ids[]=${id}`);

  if(!response.ok) {

  }

  let data = await response.json();

  return data.data;
}

export const getGameByGameStats = async (id) => {
  let response = await fetch(`${baseUrl}/stats?per_page=100&seasons[]=2019&player_ids[]=${id}`)

  if(!response.ok) {

  }

  let data = await response.json();
  console.log(data.data)

  return data.data;
}