import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Modal from './components/Modal';
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className='App'>
      <Header />
      <Main />

      <button
        className='openModalBtn'
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Посмотреть животных
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default App;
