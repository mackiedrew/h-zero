// @flow
import type { TotalDailyEnergyExpenditure, BasalMetabolicRate, ActivityLevel } from "./types";

/**
 * These activity constants are the widely used multipliers for broad-strokes activity levels,
 * these particular values are from: https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation
 */
export const LOWLY_ACTIVE: ActivityLevel = 1.2;
export const LIGHTLY_ACTIVE: ActivityLevel = 1.375;
export const MODERATELY_ACTIVE: ActivityLevel = 1.55;
export const HEAVILY_ACTIVE: ActivityLevel = 1.725;
export const EXTREMELY_ACTIVE: ActivityLevel = 1.9;
export const ACTIVITY_LEVELS = {
  LOWLY_ACTIVE,
  LIGHTLY_ACTIVE,
  MODERATELY_ACTIVE,
  HEAVILY_ACTIVE,
  EXTREMELY_ACTIVE,
};

/**
 * Simple version of the TDEE calculation equation, literally just guessing based on subjective
 * activity levels. It is suggested by the Harris-Benedict BMR Equation. Documentation for equation:
 * https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation.
 *
 * @param {number} bmr Basal metabolic rate, calculated by any one of the BMR calculators.
 * @param {number} activityLevel Roughly considered, and poorly accurate activity level as defined
 * by the ENUM also in this file.
 * @returns {number} Total daily energy expenditure in kilo-calories.
 */
export const simpleTdee = (
  bmr: BasalMetabolicRate,
  activityLevel: ActivityLevel = LOWLY_ACTIVE,
): TotalDailyEnergyExpenditure => activityLevel * bmr;

export default simpleTdee;
