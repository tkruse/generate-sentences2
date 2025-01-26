import React, { FC, useState } from "react";
import { Button, Dropdown, Table, Icon } from "react-bulma-components";
import { UserStats, NounFilters } from "../storage/UserStats";
import { StorageService } from "../storage/StorageService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StatsRechart } from "./StatsRechart";
import {
  faFaceTired,
  faFaceMeh,
  faFaceGrinStars,
} from "@fortawesome/free-solid-svg-icons";

type props = {};

export const Statistics: FC<props> = ({}) => {
  const [, setRefresh] = useState(0);
  const stats: UserStats = StorageService.getStats();

  const handleClearStats = () => {
    StorageService.clearStats();
    setRefresh((prev) => prev + 1);
  };

  return (
    <Dropdown label="Statistik" closeOnSelect={false} right={true}>
      <Dropdown.Item
        value="Test"
        style={{
          maxHeight: "80vh",
          minWidth: "80vw",
          overflowY: "auto",
          whiteSpace: "normal",
          wordWrap: "break-word",
        }}
      >
        <StatsRechart stats={stats}></StatsRechart>
        <Table>
          <thead>
            <tr>
              <th>Gesamt</th>
              <th>Total</th>
              <th style={{ textAlign: "center" }}>
                <Icon color={"primary"}>
                  <FontAwesomeIcon icon={faFaceGrinStars} size="2x" />
                </Icon>
              </th>
              <th style={{ textAlign: "center" }}>
                <Icon color={"warning"}>
                  <FontAwesomeIcon icon={faFaceMeh} size="2x" />
                </Icon>
              </th>
              <th style={{ textAlign: "center" }}>
                <Icon color={"danger"}>
                  <FontAwesomeIcon icon={faFaceTired} size="2x" />
                </Icon>
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.values(NounFilters).map((filter) => (
              <tr key={filter.label}>
                <td>{filter.label}</td>
                <td>{stats.summary(undefined, filter.filter).getTotal()}</td>
                <td>
                  {stats.summary(undefined, filter.filter).getStrongPercent()}%
                </td>
                <td>
                  {stats.summary(undefined, filter.filter).getWeakPercent()}%
                </td>
                <td>
                  {stats.summary(undefined, filter.filter).getWrongPercent()}%
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Table>
          <thead>
            <tr>
              <th>Heute</th>
              <th>Total</th>
              <th style={{ textAlign: "center" }}>
                <Icon color={"primary"}>
                  <FontAwesomeIcon icon={faFaceGrinStars} size="2x" />
                </Icon>
              </th>
              <th style={{ textAlign: "center" }}>
                <Icon color={"warning"}>
                  <FontAwesomeIcon icon={faFaceMeh} size="2x" />
                </Icon>
              </th>
              <th style={{ textAlign: "center" }}>
                <Icon color={"danger"}>
                  <FontAwesomeIcon icon={faFaceTired} size="2x" />
                </Icon>
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.values(NounFilters).map((filter) => (
              <tr key={filter.label}>
                <td>{filter.label}</td>
                <td>{stats.summary(new Date(), filter.filter).getTotal()}</td>
                <td>
                  {stats.summary(new Date(), filter.filter).getStrongPercent()}%
                </td>
                <td>
                  {stats.summary(new Date(), filter.filter).getWeakPercent()}%
                </td>
                <td>
                  {stats.summary(new Date(), filter.filter).getWrongPercent()}%
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Button color="danger" onClick={handleClearStats}>
          löschen
        </Button>
      </Dropdown.Item>
    </Dropdown>
  );
};
