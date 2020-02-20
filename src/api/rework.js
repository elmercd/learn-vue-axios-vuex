import axios from "axios";

export const fetchReworks = async () => {
  return await axios.get("https://my.api.mockaroo.com/reworks", {
    headers: { "X-API-Key": "a6c76fa0" }
  });
};
