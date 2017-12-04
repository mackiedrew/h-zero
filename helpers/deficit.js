// @flow
import type { Kilograms, KiloCalories, Percentage } from "./types";
import { fatMass } from "./mass";

/**
 * The maximum kilo-calorie deficit someone can survive on, referencing the ideal number of kcals
 * that can be metabolized out of fat in a single day. This is 69 kcal/kg of fat mass.
 *
 * @param {number} totalMass An individual's total fat and lean mass in kilograms (kg).
 * @param {number} bodyFatPercentage The % of an individual's total mass that consists of fat.
 * @returns {number} The most number of kcalories that an individual can get from their own fat per
 * day, therefore the best case for maximum kilo-calorie (kcal) deficit.
 */
export const maxDeficit = (totalMass: Kilograms, bodyFatPercentage: Percentage): KiloCalories =>
  fatMass(totalMass, bodyFatPercentage) * 69;
