import React, { FC, useState } from 'react';
import { Words } from '../models/Words';

type props = {
  words: Words;
};

export const EnglishSentenceRenderer: FC<props> = ({ words }) => {
  return (
    <div>
      <h3>{words.renderEN()}</h3>
    </div>
  );
};
