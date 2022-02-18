import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";

const options = {
  method: "GET",
  url: URL,
  params: {
    latitude: "12.91285",
    longitude: "100.87808",
    limit: "30",
    currency: "USD",
    distance: "2",
    open_now: "false",
    lunit: "km",
    lang: "en_US",
  },
  headers: {
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    "x-rapidapi-key": "a40c9d14bamsh15fb36a045eee89p11d23djsn8d694b39fce2",
  },
};

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);

    return data;
  } catch (error) {
    console.log(error);
  }
};
