function DogCard({ dog, newDog }) {
  return (
    <div>
      <img src={dog.image} alt="Dog" width="300" />
      <br />
      <button onClick={newDog}>New Dog</button>
    </div>
  );
}

export default DogCard;