import React, { FC } from "react";
import { Words } from "../models/Words";

type props = {
  words: Words;
};

export const HiddenSentenceRenderer: FC<props> = ({ words }) => {
  return (
    <div>
      <h3 className="box is-fluid generated-text">
        <p>({words.renderHints()})</p>
        <p>{words.renderHidden()}</p>
      </h3>
    </div>
  );
};
