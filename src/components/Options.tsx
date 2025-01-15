import React, { FC, useEffect, useState } from "react";
import { Dropdown, Form } from "react-bulma-components";
import { NounState } from "../models/corpus/Nouns";

type Props = {
  onChange: (config: {
    attributeMaxCount: number;
    minimum: number;
    maximum: number;
    allowedStates: NounState[];
  }) => void;
};

export const Options: FC<Props> = ({ onChange }) => {
  const [attributeMaxCount, setAttributeMaxCount] = useState(
    Math.floor(Math.random() * 4),
  );
  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(3);
  const [allowedStates, setAllowedStates] = useState<NounState[]>(
    Object.values(NounState),
  );

  useEffect(() => {
    onChange({ attributeMaxCount, minimum, maximum, allowedStates });
  }, [attributeMaxCount, minimum, maximum, allowedStates]);

  return (
    <Dropdown label="Options" closeOnSelect={false} up={true}>
      <Dropdown.Item value="test">
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
                  } else if (minimum === 5 && maximum === 5) {
                    setMinimum(1);
                  }
                } else {
                  if (minimum === 0 && maximum == 1) {
                    setMaximum(0);
                  } else if (minimum === 1 && maximum === 5) {
                    setMinimum(5);
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
            <Form.Control>
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
            </Form.Control>
          </Form.Field>
        </Form.Field>
      </Dropdown.Item>
    </Dropdown>
  );
};
