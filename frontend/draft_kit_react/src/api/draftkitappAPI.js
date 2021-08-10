// const fetchLeagueByID = (leagueID) => {
//   return fetch(`https://cors-anywhere.herokuapp.com/https://draftkitapp-cp.herokuapp.com/draft_kit_app/${leagueID}`)
//     .then((response) => response.json())
// }

const fetchLeagues = () => {
  return fetch("http://localhost:8000/draft_kit_app/")
    .then((response) => response.json())
}    

const fetchPlayers = () => {
  return fetch("https://api.sportsdata.io/v3/nfl/stats/json/PlayerGameStatsByWeek/2020REG/1?key=9887c231b1c14ecba6bac306bcf256cf")
    .then((response) => response.json())
}    

const fetchProjections = () => {
  return fetch("https://api.sportsdata.io/v3/nfl/projections/json/PlayerSeasonProjectionStats/2021REG?key=9887c231b1c14ecba6bac306bcf256cf")
    .then((response) => response.json())
}    



const exportedObject = {
   
  fetchPlayers,
  fetchLeagues,
};

export default exportedObject;
    
