import React, { FC, useState } from "react";
import { Sentence } from "../models/Sentence";
import { GermanSentenceRenderer } from "./GermanSentenceRenderer";
import { HiddenSentenceRenderer } from "./HiddenSentenceRenderer";
import { Corpus } from "../models/Corpus";
import { StorageService } from "../storage/StorageService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faEnvelopeOpenText,
  faRotateRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import { Reminder } from "./Reminder";
import { Statistics } from "./Statistics";
import { Block, Button, Icon, Level, Container } from "react-bulma-components";
import { Options } from "./Options";
import { NounState } from "../models/corpus/Nouns";
import { GrammaticalCase } from "../models/GrammaticalCase";

export const RandomSentence: FC = () => {
  const corpus = new Corpus();

  const [hidden, setHidden] = useState(true);

  const [options, setOptions] = useState({
    attributeMaxCount: Math.floor(Math.random() * 4),
    minimum: 0,
    maximum: 3,
    allowedStates: Object.values(NounState),
    allowedGrammaticalCases: Object.values(GrammaticalCase),
  });

  const [words, setWords] = useState<Sentence>(() =>
    corpus.randomSentence(options),
  );

  function toggleVisibility() {
    setHidden(!hidden);
  }

  function storeResultAndGenerateNext(score: number) {
    StorageService.appendRepetition({ score: score, noun: words.noun });
    setWords(corpus.randomSentence(options));
    setHidden(true);
  }

  return (
    <div>
      <Level style={{ textAlign: "center" }} className="is-mobile">
        <Level.Item>
          <Reminder></Reminder>
        </Level.Item>
        <Level.Item>
          <Options onChange={setOptions}></Options>
        </Level.Item>
        <Level.Item>
          <Statistics></Statistics>
        </Level.Item>
      </Level>
      <Container
        className={
          "is-flex is-flex-direction-column is-justify-content-space-between"
        }
        style={{ minHeight: "80vh" }}
      >
        <Block>
          <HiddenSentenceRenderer words={words}></HiddenSentenceRenderer>
          <GermanSentenceRenderer
            words={words}
            hidden={hidden}
          ></GermanSentenceRenderer>
        </Block>
        <div
          className="columns is-mobile is-vcentered"
          style={{ minHeight: "30vh" }}
        >
          <div className="column" style={{ textAlign: "center" }}>
            {hidden ? (
              <Button
                color={"info"}
                size={"large"}
                hidden={!hidden}
                onClick={toggleVisibility}
                aria-label="reveal"
              >
                <Icon>
                  <FontAwesomeIcon
                    icon={faEnvelopeOpenText}
                    size="2x"
                    inverse
                  />
                </Icon>
              </Button>
            ) : (
              <div
                className="buttons is-centered"
                style={{ textAlign: "center" }}
              >
                <Button
                  color={"danger"}
                  size={"large"}
                  hidden={hidden}
                  onClick={() => storeResultAndGenerateNext(0)}
                  aria-label="next"
                >
                  <Icon>
                    <FontAwesomeIcon icon={faCircleXmark} size="2x" />
                  </Icon>
                </Button>
                <Button
                  color={"warning"}
                  size={"large"}
                  hidden={hidden}
                  onClick={() => storeResultAndGenerateNext(0.5)}
                  aria-label="next"
                >
                  <Icon>
                    <FontAwesomeIcon icon={faRotateRight} size="2x" />
                  </Icon>
                </Button>
                <Button
                  color={"primary"}
                  size={"large"}
                  hidden={hidden}
                  onClick={() => storeResultAndGenerateNext(1)}
                  aria-label="next"
                >
                  <Icon>
                    <FontAwesomeIcon icon={faCircleCheck} size="2x" />
                  </Icon>
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
