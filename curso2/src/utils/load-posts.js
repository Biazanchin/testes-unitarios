export const loadPosts = async () => {
  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
  const photosResponse = fetch('https://picsum.photos/v2/list');

  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

  const postsJson = await posts.json();
  const photosJson = await photos.json();

  const postsAndPhotos = postsJson.map((post, index) => {
    return {
      ...post,
      cover: photosJson[index]?.download_url,
    };
  });

  return postsAndPhotos;
};
