import React, { FC, useState } from 'react';
import { Words } from '../models/Words';
import { GermanSentenceRenderer } from './GermanSentenceRenderer'
import { EnglishSentenceRenderer } from './EnglishSentenceRenderer'
import { Corpus } from '../models/Corpus'

export const RandomSentencePair: FC = () => {

  const corpus = new Corpus();

  const [words, setWords] = useState<Words>(() => corpus.randomSentence());

  const [hidden, setHidden] = useState(true);
  function toggleVisibility() {
     setHidden(!hidden);
  }

  function generateNext() {
    setWords(corpus.randomSentence());
    setHidden(true);
  }

  return (
    <>
      <EnglishSentenceRenderer words={words}></EnglishSentenceRenderer>
      <GermanSentenceRenderer words={words} hidden={hidden}></GermanSentenceRenderer>

      <button hidden={!hidden} onClick={toggleVisibility}>Show German</button>
      <button hidden={hidden} onClick={generateNext}>Next Sentence</button>
    </>
  );
};
