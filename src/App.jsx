import { useEffect, useState } from "react";
import Header from "./components/Header";
import DogCard from "./components/DogCard";

function App() {
  const [dog, setDog] = useState({
    image: "",
  });

  function getDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDog({
          image: data.message,
        });
      });
  }

  useEffect(() => {
    getDog();
  }, []);

  return (
    <div className="app">
      <Header />

      <DogCard image={dog.image} />

      <button onClick={getDog}>
        New Dog
      </button>
    </div>
  );
}

export default App;