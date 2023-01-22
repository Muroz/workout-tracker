export enum exerciseTypes {
  WEIGHT = 'WEIGHT',
  DISTANCE = 'DISTANCE',
  TIME = 'TIME'
}

export type ValidExerciseType = keyof typeof exerciseTypes;

export const weightUnits = [
  { label: 'Kilogram (kg)', value: 'kg' },
  { label: 'Pound (lb)', value: 'lb' }
];

export const timeUnits = [
  { label: 'Minutes (min)', value: 'min' },
  { label: 'Seconds (s)', value: 's' },
  { label: 'Hours (hr)', value: 'hr' }
];

export const distanceUnits = [
  { label: 'Kilometers (km)', value: 'km' },
  { label: 'Miles (mi)', value: 'mi' },
  { label: 'Yards (yd)', value: 'yd' }
];
