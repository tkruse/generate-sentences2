import { UserStats } from "./UserStats";
import { Repetition } from "./Repetition";

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
      return { repPerDay: new Map() };
    }
    const parsed = JSON.parse(stored);
    // Convert array back to Map
    return {
      repPerDay: new Map(parsed.repPerDay),
    };
  },

  clearStats(): void {
    localStorage.removeItem("userStats");
  },
};
