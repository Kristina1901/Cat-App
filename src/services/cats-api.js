import axios from 'axios';
export async function getCatsVote() {
  const { data } = await axios.get(
    'https://api.thecatapi.com/v1/images/search',
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '17d94b92-754f-46eb-99a0-65be65b5d18f',
      },
    }
  );

  return data;
}
export async function getCatsBreeds() {
  const { data } = await axios.get('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': '17d94b92-754f-46eb-99a0-65be65b5d18f',
    },
  });

  return data;
}
export async function getCatsBreedsImg(limit, page) {
  const { data } = await axios.get(
    `https://api.thecatapi.com/v1/breeds?limit=${limit}&page=${page}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '17d94b92-754f-46eb-99a0-65be65b5d18f',
      },
    }
  );

  return data;
}
// export async function getCatsBreedsbyName(query) {
//   const { data } = await axios.get(
//     `https://api.thecatapi.com/v1/breeds/search?q=${query}`,
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         'x-api-key': '17d94b92-754f-46eb-99a0-65be65b5d18f',
//       },
//     }
//   );

//   return data;
// }
