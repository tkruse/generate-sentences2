import React from 'react';
import './App.css';
import { GermanSentenceRenderer } from './components/GermanSentenceRenderer'
import { EnglishSentenceRenderer } from './components/EnglishSentenceRenderer'
import { Phone } from './models/nouns/Phone'
import { ThisIsA } from './models/sentences/ThisIsA'

function App() {
  console.log("start");

  const words = new ThisIsA(new Phone());
  console.log(words.renderDE());

  return (
    <div className="App">
      <header className="App-header">
         Generate Sentence pairs in 2 languages.
      </header>

      <EnglishSentenceRenderer words={words}></EnglishSentenceRenderer>
      <GermanSentenceRenderer words={words}></GermanSentenceRenderer>
    </div>
  );
}

export default App;
