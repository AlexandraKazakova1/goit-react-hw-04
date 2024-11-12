import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
import { fetchGallery } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageCard from "./components/ImageCard/ImageCard";

const App = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await fetchGallery();
        setGallery(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const [submit, setSubmit] = useState("");
  return (
    <div>
      <SearchBar onSubmit={setSubmit} />
      <ImageGallery gallery={gallery} />
    </div>
  );
};

export default App;
