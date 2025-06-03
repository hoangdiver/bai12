import React, { useState } from 'react';
import './App.css';

function App() {
  // Danh sách các động vật có thể thêm (đường dẫn hình ảnh)
  const animals = [
    'img/horse.svg',
    'img/bird.svg',
    'img/dog.svg',
    'img/gator.svg',
    'img/heart.svg',
    'img/cat.svg'
  ];

  // Sử dụng useState để quản lý danh sách động vật đã thêm
  const [animalList, setAnimalList] = useState([]);

  // Hàm để thêm một động vật ngẫu nhiên
  const addAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    const randomAnimal = animals[randomIndex];
    setAnimalList([...animalList, randomAnimal]);
  };

  return (
    <div className="container">
      <button className="add-button" onClick={addAnimal}>
        Add Animal
      </button>
      <div className="animal-list">
        {animalList.map((animal, index) => (
          <div key={index} className="animal-card">
            <img src={animal} alt="Animal" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;