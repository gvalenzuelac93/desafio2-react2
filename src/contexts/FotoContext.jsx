import { createContext, useState, useEffect } from "react";

const baseURL = "https://api.pexels.com/v1/search?query=chile&per_page=20";
const API_KEY = "UZRrEWJFa1hEwO6kueiflKfzc3QzUNYa7PlJE6iP2ivNLi6M5Q7D2xKo";

export const FotoContext = createContext();

export function FotoProvider({ children }) {
  const [fotos, setFotos] = useState([]);

  const getData = async () => {
    const res = await fetch(baseURL, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const data = await res.json();
    const photos = data.photos.map((photo) => {
      return {
        id: photo.id,
        src: photo.src.tiny,
        alt: photo.alt,
        liked: false,
      };
    });

    setFotos(photos);
  };

  useEffect(() => {
    getData();
  }, []);

  const globalState = { fotos, setFotos };

  return <FotoContext.Provider value={globalState}> {children} </FotoContext.Provider>;
}
