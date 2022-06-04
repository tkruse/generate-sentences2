import React, { FC, useState } from 'react';
import { Words } from '../models/Words';

type props = {
  words: Words;
};

export const EnglishSentenceRenderer: FC<props> = ({ words }) => {
  // const [hidden, setDisplay] = useState(false);
  // function toggleVisibility() {
  //    hidden===true?setDisplay(false)
  //    :setDisplay(true);
  // }

  return (
    <div>
      <h3>{words.renderEN()}.</h3>
    </div>
  );
};
