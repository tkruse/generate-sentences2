import React, { FC } from "react";
import { Dropdown, Table } from "react-bulma-components";
import { UserStats } from "../storage/UserStats";
import { StorageService } from "../storage/StorageService";

type props = {};
const getTotalReps = (stats: UserStats): number => {
  return Array.from(stats.repPerDay.values()).reduce(
    (sum, arr) => sum + arr.length,
    0,
  );
};

const getReps = (date: Date, stats: UserStats): number => {
  return stats.repPerDay.get(date.toISOString().split("T")[0])?.length ?? 0;
};

export const Statistics: FC<props> = ({}) => {
  const stats: UserStats = StorageService.getStats();

  return (
    <Dropdown label="Statistik" up={true}>
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
              <th>Statistik</th>
              <th>Wert</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Gesamt</th>
              <th>{getTotalReps(stats)}</th>
            </tr>
            <tr>
              <th>Heute</th>
              <th>{getReps(new Date(), stats)}</th>
            </tr>
          </tbody>
        </Table>
      </Dropdown.Item>
    </Dropdown>
  );
};
