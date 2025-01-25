import { Repetition } from "./Repetition";

/**
 * An interface storing user statistics for the last seven days, for each day the number of attempts and successes.
 */
export interface UserStats {
  repPerDay: Map<string, Repetition[]>;
}
