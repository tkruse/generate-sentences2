import React, { FC, useState } from "react";
import { Button, Dropdown, Table } from "react-bulma-components";
import { UserStats, NounFilters } from "../storage/UserStats";
import { StorageService } from "../storage/StorageService";
import { StatsRechart } from "./StatsRechart";

type props = {};

export const Statistics: FC<props> = ({}) => {
  const [, setRefresh] = useState(0);
  const stats: UserStats = StorageService.getStats();

  const handleClearStats = () => {
    StorageService.clearStats();
    setRefresh((prev) => prev + 1);
  };

  return (
    <Dropdown label="Statistik" closeOnSelect={false} up={true}>
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
              <th>Gut</th>
              <th>Mittel</th>
              <th>Falsch</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(NounFilters).map((filter) => (
              <tr key={filter.label}>
                <td>{filter.label}</td>
                <td>{stats.summary(undefined, filter.filter).total}</td>
                <td>
                  {(
                    (stats.summary(undefined, filter.filter).strong /
                      stats.summary(undefined, filter.filter).total) *
                    100
                  ).toFixed(1)}
                  %
                </td>
                <td>
                  {(
                    (stats.summary(undefined, filter.filter).weak /
                      stats.summary(undefined, filter.filter).total) *
                    100
                  ).toFixed(1)}
                  %
                </td>
                <td>
                  {(
                    (stats.summary(undefined, filter.filter).wrong /
                      stats.summary(undefined, filter.filter).total) *
                    100
                  ).toFixed(1)}
                  %
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
              <th>Gut</th>
              <th>Mittel</th>
              <th>Falsch</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(NounFilters).map((filter) => (
              <tr key={filter.label}>
                <td>{filter.label}</td>
                <td>{stats.summary(new Date(), filter.filter).total}</td>
                <td>
                  {(
                    (stats.summary(new Date(), filter.filter).strong /
                      stats.summary(new Date(), filter.filter).total) *
                    100
                  ).toFixed(1)}
                  %
                </td>
                <td>
                  {(
                    (stats.summary(new Date(), filter.filter).weak /
                      stats.summary(new Date(), filter.filter).total) *
                    100
                  ).toFixed(1)}
                  %
                </td>
                <td>
                  {(
                    (stats.summary(new Date(), filter.filter).wrong /
                      stats.summary(new Date(), filter.filter).total) *
                    100
                  ).toFixed(1)}
                  %
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
