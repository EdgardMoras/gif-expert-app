export const getGifs = async (category) => {
  const url =
    `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Mi5hzSnTuV0NYj5zoAVhma8nl2eHjhmT`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifts = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      url: item.images.downsized.url,
    };
  });
  console.log(gifts);
  return gifts;
};
