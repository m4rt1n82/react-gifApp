

   export const getGifs = async (category) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=ZVRGE2gdrbvPCqDEXN5jDELsMAw6R3WM&limit=10`;
        const result = await fetch(url);
        const { data } = await result.json();
        const gifs = data.map(img => { return { id: img.id, title: img.title, url: img.images?.downsized_medium.url } });

        return gifs;
    }
