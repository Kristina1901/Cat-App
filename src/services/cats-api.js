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
export async function getCatsBreedsImg(limit, page, id) {
  const { data } = await axios.get(
    `https://api.thecatapi.com/v1/breeds?limit=${limit}&page=${page}&breed_id=${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '17d94b92-754f-46eb-99a0-65be65b5d18f',
      },
    }
  );

  return data;
}
export async function getCatsBreedsbyName(query) {
  const { data } = await axios.get(
    `https://api.thecatapi.com/v1/breeds/search?q=${query}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '17d94b92-754f-46eb-99a0-65be65b5d18f',
      },
    }
  );

  return data;
}
export async function getCatsBreedsImage(id, page) {
  const { data } = await axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_id=${id}&page=${page}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '17d94b92-754f-46eb-99a0-65be65b5d18f',
      },
    }
  );

  return data;
}
export async function getCatsGallery(limit, img, order, page, breed) {
  const { data } = await axios.get(
    `https://api.thecatapi.com/v1/images/search?limit=${limit}&mime_types=${img}&order=${order}&size=small&page=${page}&breed_id=${breed}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '17d94b92-754f-46eb-99a0-65be65b5d18f',
      },
    }
  );

  return data;
}

export async function register(cat) {
  let response = await fetch('https://api.thecatapi.com/v1/images/upload', {
    method: 'POST',
    body: cat,

    headers: {
      'x-api-key': '17d94b92-754f-46eb-99a0-65be65b5d18f',
      'Access-Control-Allow-Origin': '*',
    },
  });

  return response.json();
}
export async function searchByname(word) {
  const { data } = await axios.get(
    `https://api.thecatapi.com/v1/breeds/search?q=${word}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '17d94b92-754f-46eb-99a0-65be65b5d18f',
      },
    }
  );

  return data;
}
export async function getImage(id) {
  const { data } = await axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_id=${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '17d94b92-754f-46eb-99a0-65be65b5d18f',
      },
    }
  );

  return data;
}
