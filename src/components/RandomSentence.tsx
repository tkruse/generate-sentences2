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
import { Reminder } from "./Reminder";
import { Block, Button, Icon, Section } from "react-bulma-components";
import { Options } from "./Options";
import { NounState } from "../models/corpus/Nouns";

export const RandomSentence: FC = () => {
  const corpus = new Corpus();

  const [hidden, setHidden] = useState(true);

  const [options, setOptions] = useState({
    attributeMaxCount: Math.floor(Math.random() * 4),
    minimum: 0,
    maximum: 3,
    allowedStates: Object.values(NounState),
  });

  const [words, setWords] = useState<Words>(() =>
    corpus.randomSentence(options),
  );

  function toggleVisibility() {
    setHidden(!hidden);
  }

  function generateNext() {
    setWords(corpus.randomSentence(options));
    setHidden(true);
  }

  return (
    <div>
      <Section
        className={
          "is-flex is-flex-direction-column is-justify-content-space-between"
        }
        style={{ minHeight: "95vh" }}
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
          <div className="column">
            <Block>
              <Reminder></Reminder>
            </Block>
            <Block>
              <Options onChange={setOptions}></Options>
            </Block>
          </div>
          <div className="column is-justify-content-center">
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
              <Button
                color={"primary"}
                size={"large"}
                hidden={hidden}
                onClick={generateNext}
                aria-label="next"
              >
                <Icon>
                  <FontAwesomeIcon icon={faRotateRight} size="2x" />
                </Icon>
              </Button>
            )}
          </div>
          <div className="column"></div>
        </div>
      </Section>
    </div>
  );
};
