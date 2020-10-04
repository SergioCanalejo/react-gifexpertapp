export const getGifs = async (category) => {
  const apikey = "Lg650M1xweZLTkCkFPvPUFIh4cWZDFdT";
  const url = "https://api.giphy.com/v1/gifs/search";

  const resp = await fetch(
    `${url}?api_key=${apikey}&q=${encodeURI(category)}&limit=10`
  );
  const { data } = await resp.json();

  return data.map(({ id, title, images }) => {
    return {
      id,
      title,
      url: images.downsized_medium.url,
    };
  });
};
