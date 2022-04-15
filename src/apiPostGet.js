const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameId = 'jEZTOlLrlgdZedw2eJGZ';

export const addScore = async (name, score) => {
  await fetch(`${apiUrl}${gameId}/scores`, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.json());
};

export const retrieveScore = async () => {
  const data = await fetch(`${apiUrl}${gameId}/scores`);
  const inputData = await data.json();
  return inputData;
};
