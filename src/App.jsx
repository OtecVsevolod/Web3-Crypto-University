import React from 'react';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Добро пожаловать в университет Web3!</h1>
      <p>Это начало твоего криптопутешествия.</p>
      <button onClick={() => alert('Скоро начнём обучение')}>Начать</button>
    </div>
  );
}

export default App;
