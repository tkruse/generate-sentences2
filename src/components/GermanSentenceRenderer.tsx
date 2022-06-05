import React, { FC } from "react";
import { Words } from "../models/Words";

type props = {
  words: Words;
  hidden: boolean;
};

export const GermanSentenceRenderer: FC<props> = ({ words, hidden }) => {
  return (
    <div>
      <h3
        dangerouslySetInnerHTML={{ __html: hidden ? "..." : words.renderDE() }}
        className="box is-fluid generated-text"
        hidden={hidden}
      ></h3>
    </div>
  );
};
