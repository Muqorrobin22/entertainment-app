import data from "../data/data.json";

export const CommonVideosData = async (query) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEYS2;

  try {
    const BASE_URL = `youtube.googleapis.com/youtube/v3`;
    const response = await fetch(
      `https://${BASE_URL}/${query}&key=${YOUTUBE_API_KEY}`
    );

    // GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]

    const data = await response.json();

    if (data?.error) {
      console.error("Youtube API ERRROR", error);
      return [];
    }

    return data.items.map((data) => {
      const id = data.id?.videoId || data.id;
      return {
        title: data.snippet.title,
        year: data.snippet.publishedAt.substring(0, 4),
        img: data.snippet.thumbnails.high.url,
        id,
        description: data.snippet.description,
        publishTime: data.snippet.publishedAt,
        viewCount: data.statistics.viewCount,
      };
    });
  } catch (error) {
    console.log("Something Went wrong with Video", error);
    return [];
  }
};

const VideosData = (url) => {
  const URL = `search?part=snippet&maxResults=15&q=${url}`;
  return CommonVideosData(URL);
};

// export const getPopularVideos = (videoId) => {
//   const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${YOUTUBE_API_KEY}`

//   // GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY]

// }

export const getYoutubeVideoId = (videoId) => {
  const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`;

  // GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY]

  return CommonVideosData(URL);
};

export default VideosData;
