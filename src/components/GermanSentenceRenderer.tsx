import React, { FC, useState } from 'react';
import { Words } from '../models/Words';

type props = {
  words: Words;
  hidden: boolean;
};


export const GermanSentenceRenderer: FC<props> = ({ words, hidden }) => {

  return (
    <div>
      <h3 className="box is-fluid generated-text" hidden={hidden}>{hidden ? "..." : words.renderDE()}</h3>
    </div>
  );
};
