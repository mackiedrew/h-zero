// @flow
import type { Sex, Kilograms, BasalMetabolicRate, Meters, AgeInYears } from "./types";
import { MALE } from "./constants";

/**
 * This is typically the basal metabolic rate calculator used. This is also the most recent 1990
 * revision version by Mifflin and St Jeor.
 *
 * Men: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5 .
 * Women: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161 .
 *
 * Documentation for equation: https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation.
 *
 * @param {string} sex Sex of the individual in exact patterns of: "Male" or "Female".
 * @param {number} mass Total mass of the individual in kilograms.
 * @param {number} height Height of the individual in meters (m).
 * @param {number} age Age in years rounded up, must be greater than or equal to 18.
 * @returns {number} Basal metabolic rate with a 95% confidence range for men being
 * ±213.0 kcal/day, and ±201.0 kcal/day for women.
 */
export const bmr = (
  sex: Sex = MALE,
  mass: Kilograms,
  height: Meters,
  age: AgeInYears,
): BasalMetabolicRate => 10 * mass + 625 * height - 5 * age + (sex === MALE ? 5 : -161);

/**
 * This equation can be used if the lean body mass is known, which may reap more accurate numbers
 * for exceptionally lean individuals: https://en.wikipedia.org/wiki/Basal_metabolic_rate .
 *
 * This can effectively be treated as a BMR value.
 *
 * @param {number} leanBodyMass Lean body mass, or: (1 - bodyFatPercentage) * totalMass .
 * @returns {number} Resting daily energy expenditure.
 */
export const rdee = (leanBodyMass: Kilograms): BasalMetabolicRate => 370 + 21.6 * leanBodyMass;
