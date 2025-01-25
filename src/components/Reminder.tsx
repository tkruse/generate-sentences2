import React, { FC } from "react";
import { Dropdown, Table } from "react-bulma-components";
import { renderColorizedByGender } from "../models/Coloring";

type props = {};

export const Reminder: FC<props> = ({}) => {
  return (
    <Dropdown label="Grammatik">
      <Dropdown.Item
        value="Test"
        style={{
          maxHeight: "60vh",
          overflowY: "auto",
          whiteSpace: "normal",
          wordWrap: "break-word",
        }}
      >
        <Table>
          <thead>
            <tr>
              <th>
                <b>
                  unbest.
                  <br />
                  Artikel
                </b>
              </th>
              <th>
                <b>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderColorizedByGender("männlich", "mask."),
                    }}
                  ></span>
                </b>
              </th>
              <th>
                <b>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderColorizedByGender("weiblich", "fem."),
                    }}
                  ></span>
                </b>
              </th>
              <th>
                <b>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderColorizedByGender("neutral", "neut."),
                    }}
                  ></span>
                </b>
              </th>
              <th>
                <b>plural</b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nom.</td>
              <td>ein</td>
              <td>eine</td>
              <td>ein</td>
              <td>
                -/<i>keine</i>
              </td>
            </tr>
            <tr>
              <td>Akku.</td>
              <td>einen</td>
              <td>eine</td>
              <td>
                <b>ein</b>
              </td>
              <td>
                -/<i>keine</i>
              </td>
            </tr>
            <tr>
              <td>Dativ</td>
              <td>einem</td>
              <td>einer</td>
              <td>einem</td>
              <td>
                -/<i>keinen</i>
              </td>
            </tr>
            <tr>
              <td>Genitiv</td>
              <td>eines</td>
              <td>einer</td>
              <td>eines</td>
              <td>
                -/<i>keiner</i>
              </td>
            </tr>
            <tr>
              <td colSpan={5}>gleich: mein,kein...</td>
            </tr>
          </tbody>
        </Table>
        <Table>
          <thead>
            <tr>
              <td>
                <b>best. Artikel</b>
              </td>
              <th>
                <b>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderColorizedByGender("männlich", "mask."),
                    }}
                  ></span>
                </b>
              </th>
              <th>
                <b>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderColorizedByGender("weiblich", "fem."),
                    }}
                  ></span>
                </b>
              </th>
              <th>
                <b>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderColorizedByGender("neutral", "neut."),
                    }}
                  ></span>
                </b>
              </th>
              <th>
                <b>plural</b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nom.</td>
              <td>der</td>
              <td>die</td>
              <td>das</td>
              <td>die</td>
            </tr>
            <tr>
              <td>Akku.</td>
              <td>den</td>
              <td>die</td>
              <td>
                <b>das</b>
              </td>
              <td>die</td>
            </tr>
            <tr>
              <td>Dativ</td>
              <td>dem</td>
              <td>
                <b>der</b>
              </td>
              <td>dem</td>
              <td>den</td>
            </tr>
            <tr>
              <td>Genitiv</td>
              <td>des</td>
              <td>
                <b>der</b>
              </td>
              <td>des</td>
              <td>
                <b>der</b>
              </td>
            </tr>
            <tr>
              <td colSpan={5}>gleich: welche,jede,diese,alle</td>
            </tr>
          </tbody>
        </Table>
        <Table>
          <thead>
            <tr>
              <td colSpan={5}>
                <b>
                  <i>schwache</i> Adj./Pronom Endungen nach <i>unbest.</i>{" "}
                  Artikel
                </b>
              </td>
            </tr>
            <tr>
              <th></th>
              <th>
                <b>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderColorizedByGender("männlich", "mask."),
                    }}
                  ></span>
                </b>
              </th>
              <th>
                <b>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderColorizedByGender("weiblich", "fem."),
                    }}
                  ></span>
                </b>
              </th>
              <th>
                <b>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderColorizedByGender("neutral", "neut."),
                    }}
                  ></span>
                </b>
              </th>
              <th>
                <b>plural</b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nom.</td>
              <td>-er</td>
              <td>-e</td>
              <td>-es</td>
              <td>-e</td>
            </tr>
            <tr>
              <td>Akku.</td>
              <td>-en</td>
              <td>-e</td>
              <td>-es</td>
              <td>-e</td>
            </tr>
            <tr>
              <td>Dativ</td>
              <td>-en</td>
              <td>-en</td>
              <td>-en</td>
              <td>-en</td>
            </tr>
            <tr>
              <td>Genitiv</td>
              <td>-en</td>
              <td>-en</td>
              <td>-en</td>
              <td>-en</td>
            </tr>
            <tr>
              <td colSpan={5}>z.B. ein guter Mann, ein liebes Kind</td>
            </tr>
          </tbody>
        </Table>
        <Table>
          <thead>
            <tr>
              <td colSpan={5}>
                <b>
                  <i>schwache</i> Adj./Pronom Endungen nach <i>best.</i> Artikel
                </b>
              </td>
            </tr>
            <tr>
              <th></th>
              <th>
                <b>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderColorizedByGender("männlich", "mask."),
                    }}
                  ></span>
                </b>
              </th>
              <th>
                <b>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderColorizedByGender("weiblich", "fem."),
                    }}
                  ></span>
                </b>
              </th>
              <th>
                <b>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderColorizedByGender("neutral", "neut."),
                    }}
                  ></span>
                </b>
              </th>
              <th>
                <b>plural</b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nom.</td>
              <td>
                <b>-e</b>
              </td>
              <td>-e</td>
              <td>
                <b>-e</b>
              </td>
              <td>-en</td>
            </tr>
            <tr>
              <td>Akku.</td>
              <td>-en</td>
              <td>-e</td>
              <td>
                <b>-e</b>
              </td>
              <td>-en</td>
            </tr>
            <tr>
              <td>Dativ</td>
              <td>-en</td>
              <td>-en</td>
              <td>-en</td>
              <td>-en</td>
            </tr>
            <tr>
              <td>Genitiv</td>
              <td>-en</td>
              <td>-en</td>
              <td>-en</td>
              <td>-en</td>
            </tr>
            <tr>
              <td colSpan={5}>z.B. der gute Mann, das liebe Kind</td>
            </tr>
          </tbody>
        </Table>
        <Table>
          <thead>
            <tr>
              <td>
                <b>Nomen</b>
              </td>
              <th>
                <b>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderColorizedByGender("männlich", "mask."),
                    }}
                  ></span>
                </b>
              </th>
              <th>
                <b>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderColorizedByGender("weiblich", "fem."),
                    }}
                  ></span>
                </b>
              </th>
              <th>
                <b>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderColorizedByGender("neutral", "neut."),
                    }}
                  ></span>
                </b>
              </th>
              <th>
                <b>plural</b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nom.</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-e/-n/-s/-er</td>
            </tr>
            <tr>
              <td colSpan={5}>z.B. Farben,Betten,Mäuse,Clubs,Länder</td>
            </tr>
            <tr>
              <td>Akku.</td>
              <td>-/n</td>
              <td>-</td>
              <td>-</td>
              <td>-e/-n/-s/-er</td>
            </tr>
            <tr>
              <td colSpan={5}>z.B. Suche den Namen,die Jungen,die Autos</td>
            </tr>
            <tr>
              <td>Dativ</td>
              <td>-/n</td>
              <td>-</td>
              <td>-</td>
              <td>-e/-n/-s/-ern</td>
            </tr>
            <tr>
              <td colSpan={5}>z.B. in den Ländern</td>
            </tr>
            <tr>
              <td>Genitiv</td>
              <td>-/-s/-es/-en</td>
              <td>-</td>
              <td>-/s/es</td>
              <td>-/e/en/es/ens/er</td>
            </tr>
            <tr>
              <td colSpan={5}>
                z.B. des Namens,des Tieres,des Jungen,der Frauen,der Männer
              </td>
            </tr>
          </tbody>
        </Table>
      </Dropdown.Item>
    </Dropdown>
  );
};
