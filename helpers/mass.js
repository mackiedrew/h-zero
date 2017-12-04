import type { Meters, Kilograms, Percentage, MassIndex } from "./types";

/**
 * Inverts body fat percentage to represent lean mass percentage instead.
 *
 * @param {number} bodyFatPercentage The % of an individual's total mass that consists of fat.
 * @returns {number} The percentage of an individual's total mass that consists of everything that
 * is not fat, this means muscle, organs, bones, skin, etc.
 */
export const leanMassPercentage = (bodyFatPercentage: Percentage): Percentage =>
  1 - bodyFatPercentage;

/**
 * Calculate the amount of kilograms (kg) of fat mass an individual has.
 *
 * @param {number} totalMass An individual's total fat and lean mass in kilograms (kg).
 * @param {number} bodyFatPercentage The % of an individual's total mass that consists of fat.
 * @returns {number} Total mass in kilograms (kg) that is fat.
 */
export const fatMass = (totalMass: Kilograms, bodyFatPercentage: Percentage): Kilograms =>
  totalMass * bodyFatPercentage;

/**
 * Calculate the amount of kilograms (kg) of lean mass an individual has.
 *
 * @param {number} totalMass An individual's total fat and lean mass in kilograms (kg).
 * @param {number} bodyFatPercentage The % of an individual's total mass that consists of fat.
 * @returns {number} Total mass in kilograms (kg) that is lean.
 */
export const leanMass = (totalMass: Kilograms, bodyFatPercentage: Percentage): Kilograms =>
  totalMass * leanMassPercentage(bodyFatPercentage);

/**
 * Body Mass Index (BMI) gives people a general idea of what counts as underweight, healthy and
 * overweight using height and mass.
 *
 * @param {number} totalMass An individual's total fat and lean mass in kilograms (kg).
 * @param {number} height Height in meters (m).
 * @returns {number} The body mass index formula result (kg/m^2).
 */
export const bmi = (totalMass: Kilograms, height: Meters): MassIndex => totalMass / height ** 2;

/**
 * New BMI accounts for the extremely short and extremely tall slightly better than the traditional
 * formula.
 *
 * Reference: https://people.maths.ox.ac.uk/trefethen/bmi.html .
 *
 * @param {number} totalMass An individual's total fat and lean mass in kilograms (kg).
 * @param {number} height Height in meters (m).
 * @returns {number} The new body mass index formula result (kg/m^2).
 */
export const newBmi = (totalMass: Kilograms, height: Meters): MassIndex =>
  1.3 * totalMass / height ** 2.5;

/**
 * Free fat mass index allows you to find out how close you are to the upper maximum of your
 * physical muscularity. 22 is typically the highest a man can get to with 25 being a rare
 * option for the genetically gifted.
 *
 * Reference: https://sgb.neocities.org/stuff/fitness/ffmi-metric.html .
 *
 * @param {number} totalMass An individual's total fat and lean mass in kilograms (kg).
 * @param {number} height Height in meters (m).
 * @param {number} bodyFatPercentage The % of an individual's total mass that consists of fat.
 * @returns {number} Free fat mass index, which is a good indicator of how close you are to physical
 * maximum level of muscularity.
 */
export const ffmi = (
  totalMass: Kilograms,
  height: Meters,
  bodyFatPercentage: Percentage,
): MassIndex => leanMass(totalMass, bodyFatPercentage) / height ** 2;

/**
 * Normalized FFMI which is typically used to compare between individuals of different heights.
 *
 * Reference: https://sgb.neocities.org/stuff/fitness/ffmi-metric.html .
 *
 * @param {number} totalMass An individual's total fat and lean mass in kilograms (kg).
 * @param {number} height Height in meters (m).
 * @param {number} bodyFatPercentage The % of an individual's total mass that consists of fat.
 * @returns {number} FFMI normalized so that it can be compared between individuals.
 */
export const normalizedFfmi = (
  totalMass: Kilograms,
  height: Meters,
  bodyFatPercentage: Percentage,
): MassIndex => ffmi(totalMass, height, bodyFatPercentage) + 6.1 * (1.8 - height);
