import { UserStats } from "./UserStats";
import { Repetition } from "./Repetition";
import { NounState } from "../models/corpus/Nouns";
import { GrammaticalCase } from "../models/GrammaticalCase";

export const StorageService = {
  appendRepetition(repetition: Repetition): void {
    const stats = this.getStats();
    const date = new Date().toISOString().split("T")[0];
    if (!stats.repPerDay.has(date)) {
      stats.repPerDay.set(date, []);
    }
    stats.repPerDay.get(date)?.push(repetition);
    this.saveStats(stats);
  },

  saveStats(stats: UserStats): void {
    const filteredMapEntries = Array.from(stats.repPerDay.entries()).filter(
      ([date, _]) => {
        const dateObj = new Date(date);
        const today = new Date();
        const twoWeeksAgo = new Date();
        twoWeeksAgo.setDate(today.getDate() - 14);
        return dateObj >= twoWeeksAgo;
      },
    );
    const serializable = {
      repPerDay: filteredMapEntries,
    };
    localStorage.setItem("userStats", JSON.stringify(serializable));
  },

  getStats(): UserStats {
    const stored = localStorage.getItem("userStats");
    if (!stored) {
      return new UserStats();
    }
    const parsed = JSON.parse(stored);
    // Convert array back to Map
    return new UserStats(new Map(parsed.repPerDay));
  },

  clearStats(): void {
    localStorage.removeItem("userStats");
  },

  saveOptions(options: {
    attributeMaxCount: number;
    minimum: number;
    maximum: number;
    allowedStates: NounState[];
    allowedGrammaticalCases: GrammaticalCase[];
  }): void {
    console.log("saving " + JSON.stringify(options));
    localStorage.setItem("options", JSON.stringify(options));
  },

  getOptions(): {
    attributeMaxCount: number;
    minimum: number;
    maximum: number;
    allowedStates: NounState[];
    allowedGrammaticalCases: GrammaticalCase[];
  } {
    const stored = localStorage.getItem("options");
    console.log("loaded " + stored);
    if (!stored) {
      return {
        attributeMaxCount: 2,
        minimum: 0,
        maximum: 3,
        allowedStates: Object.values(NounState),
        allowedGrammaticalCases: Object.values(GrammaticalCase),
      };
    }
    return JSON.parse(stored);
  },

  clearOptions(): void {
    localStorage.removeItem("options");
  },
};
