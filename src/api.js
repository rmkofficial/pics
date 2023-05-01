import axios from "axios";

const SearchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 6RBlXFTagkZXSFXQp9FWjIDVBeONv43A_x2AnhKL0vA",
    },
    params: {
      query: "cars",
    },
  });

  console.log(response);
  return response;
};

export default SearchImages;
