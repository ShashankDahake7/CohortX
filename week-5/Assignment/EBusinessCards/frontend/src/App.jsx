import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BusinessCard from './component/BusinessCard';
import CardForm from './component/CardForm';

function App() {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    try {
      const response = await axios.get('http://localhost:3000/cards');
      setCards(Array.isArray(response.data.cards) ? response.data.cards : []);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="p-4">
      <h1 style={{ textAlign: 'center' }}>E-Business Card</h1> 
      <CardForm fetchCards={fetchCards} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {cards.map((card, index) => (
          <BusinessCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default App;
