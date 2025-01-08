import React, { FC } from "react";
import { Dropdown, Table } from "react-bulma-components";
import { renderColorizedByGender } from "../models/Coloring";

type props = {};

export const Reminder: FC<props> = ({}) => {
  return (
    <Dropdown label="Grammatik" up={true}>
      <Dropdown.Item value="Test">
        <Table>
          <thead>
            <tr>
              <th>Artikel</th>
              <th>Akkusativ</th>
              <th>Dativ</th>
              <th>Genitiv</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderColorizedByGender("männlich", "Maskulinum"),
                    }}
                  ></span>
                </b>
              </td>
              <td>den</td>
              <td>dem</td>
              <td>des</td>
            </tr>
            <tr>
              <td>
                <b>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderColorizedByGender("weiblich", "Femininum"),
                    }}
                  ></span>
                </b>
              </td>
              <td>die</td>
              <td>der</td>
              <td>der</td>
            </tr>
            <tr>
              <td>
                <b>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderColorizedByGender("neutral", "Neutrum"),
                    }}
                  ></span>
                </b>
              </td>
              <td>das</td>
              <td>dem</td>
              <td>des</td>
            </tr>
            <tr>
              <td>
                <b>Plural</b>
              </td>
              <td>die</td>
              <td>den</td>
              <td>der</td>
            </tr>
          </tbody>
        </Table>
        <Table>
          <thead>
            <tr>
              <th>Endungen</th>
              <th>Akkusativ</th>
              <th>Dativ</th>
              <th>Genitiv</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderColorizedByGender("männlich", "Maskulinum"),
                    }}
                  ></span>
                </b>
              </td>
              <td>-en</td>
              <td>-em</td>
              <td>-es</td>
            </tr>
            <tr>
              <td>
                <b>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderColorizedByGender("weiblich", "Femininum"),
                    }}
                  ></span>
                </b>
              </td>
              <td>-e</td>
              <td>-er</td>
              <td>-er</td>
            </tr>
            <tr>
              <td>
                <b>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderColorizedByGender("neutral", "Neutrum"),
                    }}
                  ></span>
                </b>
              </td>
              <td>-es / - *</td>
              <td>-em</td>
              <td>-es</td>
            </tr>
            <tr>
              <td>
                <b>Plural</b>
              </td>
              <td>-e</td>
              <td>-en</td>
              <td>-er</td>
            </tr>
          </tbody>
        </Table>
      </Dropdown.Item>
    </Dropdown>
  );
};
