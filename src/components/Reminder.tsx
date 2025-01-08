import React, { FC } from "react";
import { Dropdown, Table } from "react-bulma-components";

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
                <b>Maskulinum</b>
              </td>
              <td>den</td>
              <td>dem</td>
              <td>des</td>
            </tr>
            <tr>
              <td>
                <b>Femininum</b>
              </td>
              <td>die</td>
              <td>der</td>
              <td>der</td>
            </tr>
            <tr>
              <td>
                <b>Neutrum</b>
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
                <b>Maskulinum</b>
              </td>
              <td>-en</td>
              <td>-em</td>
              <td>-es</td>
            </tr>
            <tr>
              <td>
                <b>Femininum</b>
              </td>
              <td>-e</td>
              <td>-er</td>
              <td>-er</td>
            </tr>
            <tr>
              <td>
                <b>Neutrum</b>
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
