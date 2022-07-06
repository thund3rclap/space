import React from 'react';

// Components
import Context from "./context/Context.js";
import Header from "./components/header/Header.jsx";
import ContentWrapper from './components/content/ContentWrapper.jsx';
import Subheader from './components/subheader/Subheader.jsx';

export default function App() {
  return (
    <Context.Provider value={Context}>
        <Header />
        <Subheader />
        <ContentWrapper />
    </Context.Provider>
  );
}

