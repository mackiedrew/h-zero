// @flow
import type { Kilograms, KiloCalories } from "./types";

/**
 * Convert the number of kilograms (kg) provided into the kilocalories that would represent them
 * in a typical human metabolism. ie. You would need to burn 7876 kcal to lose 1 kilogram of mass.
 *
 * @param {number} kilograms Mass in kilograms (kg).
 * @returns {number} KiloCalories (kcal) that are representative of supplied kilograms.
 */
export const kilogramsToKiloCalories = (kilograms: Kilograms = 1): KiloCalories => kilograms * 7826;

/**
 * Convert the number of kilocalories (kcal) provided into the kilocalories that would represent them
 * in a typical human metabolism. You would get 7826 kcals of energy if you burned 1 kg of mass.
 *
 * @param {number} kilocalories Energy in kilocalories (kg).
 * @returns {number} Kilograms (kg) that are representative of supplied kilocalories.
 */
export const kiloCaloriesToKilograms = (kilocalories: KiloCalories = 1): Kilograms =>
  kilocalories / 7826;
