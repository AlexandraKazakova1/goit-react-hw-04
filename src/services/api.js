import axios from "axios";

// const BASE_URL = "https://api.unsplash.com/";

export const fetchArticles = async (query, page) => {
  const response = await axios.get("https://api.unsplash.com/photos", {
    params: {
      query,
      page,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID SL76qFrJljjmTwgE_HFP7v5ZWwc6YLum-SAkymRi4_w`,
    },
  });

  return response.data.results;
};
