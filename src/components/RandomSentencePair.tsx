import React, { FC, useState } from 'react';
import { Words } from '../models/Words';
import { GermanSentenceRenderer } from './GermanSentenceRenderer'
import { EnglishSentenceRenderer } from './EnglishSentenceRenderer'
import { Phone } from '../models/nouns/Phone'
import { ThisIsA } from '../models/sentences/ThisIsA'
import { GiveMe } from '../models/sentences/GiveMe'

export const RandomSentencePair: FC = () => {

  const [words, setWords] = useState<Words>(new ThisIsA(new Phone()));

  function generateNext() {
    setWords(new GiveMe(new Phone()));
  }

  console.log(words.renderDE());


  return (
    <>
      <EnglishSentenceRenderer words={words}></EnglishSentenceRenderer>
      <GermanSentenceRenderer words={words}></GermanSentenceRenderer>

      <button onClick={generateNext}>Next Sentence</button>
    </>
  );
};
