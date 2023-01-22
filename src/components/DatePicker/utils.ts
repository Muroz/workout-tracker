export const getDayName = (dayObject: Date, nameLenght?: number) => {
  const dayOfTheWeek = dayObject.getDay();

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  const dayName = nameLenght
    ? days[dayOfTheWeek].substring(0, nameLenght)
    : days[dayOfTheWeek];

  return dayName;
};

export const getMonthName = (dayObject: Date, nameLenght?: number) => {
  const month = dayObject.getMonth();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const monthName = nameLenght
    ? months[month].substring(0, nameLenght)
    : months[month];

  return monthName;
};

export const getRelativeWeek = (weekModifier: number) => {
  const currentDate = new Date();

  currentDate.setDate(
    currentDate.getDate() - (currentDate.getDay() + weekModifier * 7)
  );

  const newWeek = [];
  for (let i = 0; i < 7; i++) {
    newWeek.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return newWeek;
};

export const getDateString = (date: Date) => {
  if (!date) {
    throw new Error('No valid date passed');
  }

  const dateString = date.toISOString().substring(0, 10);

  return dateString;
};

export const isDateInTheFuture = (currentDate: string, date: string) => {
  const currentDateTime = new Date(currentDate).getTime();
  const dateTime = new Date(date).getTime();

  return currentDateTime < dateTime;
};

export const getCurrentDate = () => {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return today;
};

export const triggerInputOnChangeEvent = (
  input: HTMLInputElement,
  value: string | number
) => {
  const valueSetter = Object.getOwnPropertyDescriptor(input, 'value')?.set;
  const prototype = Object.getPrototypeOf(input);
  const prototypeValueSetter = Object.getOwnPropertyDescriptor(
    prototype,
    'value'
  )?.set;
  if (valueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter?.call(input, value);
  } else {
    valueSetter?.call(input, value);
  }
  input.dispatchEvent(new Event('input', { bubbles: true }));
};
