import { Repetition } from "./Repetition";
import { Noun } from "../models/Noun";
import { StorageService } from "./StorageService";

describe("StorageService", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("saveStatsAddRepetition", () => {
    // check empty
    expect(StorageService.getStats().repPerDay.size).toBe(0);
    // check after adding one repetition
    const rep = { noun: new Noun("der schlüssel,-,-s") };
    StorageService.appendRepetition(rep);
    expect(StorageService.getStats().repPerDay.size).toBe(1);
  });

  test("filterOldEntriesOnSave", () => {
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 15);
    const repMap = new Map<string, Repetition[]>();
    const rep = { noun: new Noun("der schlüssel,-,-s") };
    repMap.set(twoWeeksAgo.toISOString().split("T")[0], [rep]);
    StorageService.saveStats({
      repPerDay: repMap,
    });
    expect(StorageService.getStats().repPerDay.size).toBe(0);
  });
});
