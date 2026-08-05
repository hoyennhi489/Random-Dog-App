import { useState } from "react";
import Header from "./components/Header";
import DogCard from "./components/DogCard";

function App() {
  const dogs = [
    "https://images.dog.ceo/breeds/retriever-golden/n02099601_3004.jpg",
    "https://images.dog.ceo/breeds/husky/n02110185_1469.jpg",
    "https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg",
  ];

  const [dog, setDog] = useState({
    image: dogs[0],
  });

  function newDog() {
    const randomIndex = Math.floor(Math.random() * dogs.length);

    setDog({
      image: dogs[randomIndex],
    });
  }

  return (
    <div className="app">
      <Header />
      <DogCard dog={dog} newDog={newDog} />
    </div>
  );
}

export default App;