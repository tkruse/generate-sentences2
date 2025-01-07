import React, { FC, useState } from "react";
import { Words } from "../models/Words";
import { GermanSentenceRenderer } from "./GermanSentenceRenderer";
import { HiddenSentenceRenderer } from "./HiddenSentenceRenderer";
import { Corpus } from "../models/Corpus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

export const RandomSentence: FC = () => {
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
    <div>
      <div className="block">
        <HiddenSentenceRenderer words={words}></HiddenSentenceRenderer>
        <GermanSentenceRenderer
          words={words}
          hidden={hidden}
        ></GermanSentenceRenderer>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          left: "0%",
          right: "0%",
        }}
      >
        {hidden ? (
          <button
            className="button is-info is-large"
            hidden={!hidden}
            onClick={toggleVisibility}
            aria-label="reveal"
          >
            <FontAwesomeIcon icon={faEnvelopeOpenText} size="2x" inverse />
          </button>
        ) : (
          <button
            className="button is-primary is-large"
            hidden={hidden}
            onClick={generateNext}
            aria-label="next"
          >
            <FontAwesomeIcon icon={faRotateRight} size="2x" />
          </button>
        )}
      </div>
    </div>
  );
};
