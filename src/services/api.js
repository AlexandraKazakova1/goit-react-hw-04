import axios from "axios";
export const fetchGallery = async () => {
  const response = await axios.get(
    "https://api.unsplash.com/photos/?client_id=SL76qFrJljjmTwgE_HFP7v5ZWwc6YLum-SAkymRi4_w"
  );
  return response.data;
};
