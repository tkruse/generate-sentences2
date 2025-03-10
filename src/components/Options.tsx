import React, { FC, useEffect, useState } from "react";
import { Dropdown, Form } from "react-bulma-components";
import { NounState } from "../models/corpus/Nouns";
import { GrammaticalCase } from "../models/GrammaticalCase";

type Props = {
  onChange: (config: {
    attributeMaxCount: number;
    minimum: number;
    maximum: number;
    allowedStates: NounState[];
    allowedGrammaticalCases: GrammaticalCase[];
  }) => void;
};
type Options = {
  attributeMaxCount: number;
  minimum: number;
  maximum: number;
  allowedStates: NounState[];
  allowedGrammaticalCases: GrammaticalCase[];
};

type ExtendedProps = Props & {
  options: Options;
};

export const Options: FC<ExtendedProps> = ({ onChange, options }) => {
  const [attributeMaxCount, setAttributeMaxCount] = useState(
    options.attributeMaxCount,
  );
  const [minimum, setMinimum] = useState(options.minimum);
  const [maximum, setMaximum] = useState(options.maximum);
  const [allowedStates, setAllowedStates] = useState<NounState[]>(
    options.allowedStates,
  );
  const [allowedGrammaticalCases, setAllowedGrammaticalCases] = useState<
    GrammaticalCase[]
  >(options.allowedGrammaticalCases);

  useEffect(() => {
    onChange({
      attributeMaxCount,
      minimum,
      maximum,
      allowedStates,
      allowedGrammaticalCases,
    });
  }, [
    attributeMaxCount,
    minimum,
    maximum,
    allowedStates,
    allowedGrammaticalCases,
  ]);

  return (
    <Dropdown label="Optionen" closeOnSelect={false}>
      <Dropdown.Item value="test">
        <Form.Field>
          <Form.Label>Fälle</Form.Label>
          <Form.Field>
            <div className="checkboxes">
              {Object.values(GrammaticalCase).map((state) => (
                <Form.Checkbox
                  key={state}
                  checked={allowedGrammaticalCases.includes(state)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAllowedGrammaticalCases([
                        ...allowedGrammaticalCases,
                        state,
                      ]);
                    } else if (allowedGrammaticalCases.length > 1) {
                      setAllowedGrammaticalCases(
                        allowedGrammaticalCases.filter((s) => s !== state),
                      );
                    }
                  }}
                >
                  {state}
                </Form.Checkbox>
              ))}
            </div>
          </Form.Field>
        </Form.Field>
        <Form.Field>
          <Form.Checkbox
            checked={attributeMaxCount > 0}
            onChange={(e) => setAttributeMaxCount(e.target.checked ? 3 : 0)}
          >
            mit Adjektiven
          </Form.Checkbox>
        </Form.Field>
        <Form.Field>
          <Form.Label>Anzahl</Form.Label>
          <div className="checkboxes">
            <Form.Checkbox
              checked={minimum === 0}
              onChange={(e) => {
                if (e.target.checked) {
                  setMinimum(0);
                } else if (maximum > 0) {
                  setMinimum(1);
                }
              }}
            >
              0
            </Form.Checkbox>
            <Form.Checkbox
              checked={minimum <= 1 && maximum >= 1}
              onChange={(e) => {
                if (e.target.checked) {
                  if (minimum === 0 && maximum == 0) {
                    setMaximum(1);
                  } else if (minimum > 1 && maximum > 1) {
                    setMinimum(1);
                  }
                } else {
                  if (minimum === 0 && maximum == 1) {
                    setMaximum(0);
                  } else if (minimum === 1 && maximum > 1) {
                    setMinimum(2);
                  }
                }
              }}
            >
              1
            </Form.Checkbox>
            <Form.Checkbox
              checked={maximum > 1}
              onChange={(e) => {
                if (e.target.checked) {
                  setMaximum(5);
                } else if (minimum < 5) {
                  setMaximum(1);
                }
              }}
            >
              viele
            </Form.Checkbox>
          </div>
        </Form.Field>
        <Form.Field>
          <Form.Label>Pronomen</Form.Label>
          <Form.Field>
            <div className="checkboxes">
              {Object.values(NounState).map((state) => (
                <Form.Checkbox
                  key={state}
                  checked={allowedStates.includes(state)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAllowedStates([...allowedStates, state]);
                    } else {
                      setAllowedStates(
                        allowedStates.filter((s) => s !== state),
                      );
                    }
                  }}
                >
                  {state}
                </Form.Checkbox>
              ))}
            </div>
          </Form.Field>
        </Form.Field>
      </Dropdown.Item>
    </Dropdown>
  );
};
