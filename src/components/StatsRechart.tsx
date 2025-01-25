import React, { FC } from "react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { UserStats } from "../storage/UserStats";

type props = {
  stats: UserStats;
};

export const StatsRechart: FC<props> = ({ stats }: props) => {
  const data = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (13 - i));
    return stats.summary(date);
  });

  const baseDate = new Date();
  baseDate.setDate(baseDate.getDate() - 15);
  data.unshift({
    date: baseDate.toISOString().split("T")[0],
    wrong: 0,
    weak: 0,
    strong: 0,
  });

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <Area
          type="monotone"
          stackId="1"
          dataKey="wrong"
          stroke="hsl(348, 100%, 61%)"
          fill="hsl(348, 100%, 61%)"
        />
        <Area
          type="monotone"
          stackId="1"
          dataKey="weak"
          stroke="hsl(48, 100%, 67%)"
          fill="hsl(48, 100%, 67%)"
        />

        <Area
          type="monotone"
          stackId="1"
          dataKey="strong"
          stroke="hsl(141, 71%, 48%)"
          fill="hsl(141, 71%, 48%)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
