import { useEffect, useState } from "react";
import Header from "./components/Header";
import DogCard from "./components/DogCard";

function App() {
  const [dog, setDog] = useState({
    image: "",
  });

  const [quote, setQuote] = useState({
    text: "",
    author: "",
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

  function getQuote() {
    fetch("https://dummyjson.com/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote({
          text: data.quote,
          author: data.author,
        });
      });
  }

  useEffect(() => {
    getDog();
    getQuote();
  }, []);

  return (
    <>
      <Header />
      <DogCard image={dog.image} />
      <button onClick={getDog}>New Dog</button>
      <div className="quote">
        <h2>Random Quote</h2>
        <p>"{quote.text}"</p>
        <h4>- {quote.author}</h4>
        <button onClick={getQuote}>New Quote</button>
      </div>
    </>
  );
}

export default App;