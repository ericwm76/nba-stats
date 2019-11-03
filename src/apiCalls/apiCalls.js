const baseUrl = 'https://www.balldontlie.io/api/v1'

export const searchByName = async name => {
  let response = await fetch(`${baseUrl}/players/?search=${name}`)
  console.log(response)
}