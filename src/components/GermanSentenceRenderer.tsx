import React, { FC, useState } from 'react';
import { Words } from '../models/Words';

type props = {
  words: Words;
  hidden: boolean;
};


export const GermanSentenceRenderer: FC<props> = ({ words, hidden }) => {

  return (
    <div>
      <h3 hidden={hidden}>{words.renderDE()}</h3>
      <h3 hidden={!hidden}>...</h3>
    </div>
  );
};
