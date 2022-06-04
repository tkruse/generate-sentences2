import React, { FC, useState } from 'react';
import { Words } from '../models/Words';

type props = {
  words: Words;
};


export const GermanSentenceRenderer: FC<props> = ({ words }) => {
  const [hidden, setDisplay] = useState(true);
  function toggleVisibility() {
     hidden===true?setDisplay(false)
     :setDisplay(true);
  }

  return (
    <div>
      <h3 hidden={hidden}>{words.renderDE()}.</h3>
      <button hidden={!hidden} onClick={toggleVisibility}>Show German</button>
    </div>
  );
};
