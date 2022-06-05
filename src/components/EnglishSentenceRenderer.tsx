import React, { FC } from "react";
import { Words } from "../models/Words";

type props = {
  words: Words;
};

export const EnglishSentenceRenderer: FC<props> = ({ words }) => {
  return (
    <div>
      <h3 className="box is-fluid generated-text">{words.renderEN()}</h3>
    </div>
  );
};
